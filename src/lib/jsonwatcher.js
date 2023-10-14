import { Neutralino } from './neutralino.js';

/**
 * @param {import('svelte/store').Writable<any>} store
 * @param {string} path
 * @param {object} defaultdata
 */
export async function jsonwatcher(store, path, defaultdata){

    /**
     * @type {object}
     */
    var content;

    if(Neutralino){ // Executable
        const fs = Neutralino.filesystem;

        // Read or create json
        try{
            content = JSON.parse(await fs.readFile(path))
        }catch(e){
            content = defaultdata
            try{
                await fs.writeFile(path, JSON.stringify(content, null, 4))
            }catch(e){/* Ignore */}
        }
    }else{ // Browser
        const ls = localStorage.getItem(path)
        content = ls ? JSON.parse(ls) : defaultdata
    }

    await store.update(v => content);

    // Add watchers
    if(Neutralino){ // Executable
        const fs = Neutralino.filesystem;
        let fevt = false;

        // Add realtime watcher
        try{
            let watcherId = await fs.createWatcher(path)

            // Watch changes from the file
            Neutralino.events.on('watchFile', (/** @type {{ detail: { id: any; }; }} */ evt) => {
                if(watcherId == evt.detail.id){

                    fevt = true; // prevent our subscribe from triggering

                    store.update(async (oldv) => {
                        let content;
                        
                        try{
                            content = JSON.parse(await fs.readFile(path))
                        }catch(e){
                            content = oldv
                        }

                        fevt = false;
                        return content;
                    })
                }
            });

            // Watch changes from js side
            store.subscribe(async (v) => {
                if(fevt) return;
                try{
                    await fs.writeFile(path, JSON.stringify(v))
                }catch(e){/* Ignore */}
            })

        }catch(e){/* Ignore */}

    }else{ // Browser

        // Watch changes from js side
        store.subscribe(async (v) => 
            localStorage.setItem(path, JSON.stringify(v))
        )
    }
}