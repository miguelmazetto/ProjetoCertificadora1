import staticAdapter from '@sveltejs/adapter-static';
import { execSync } from "child_process"
import { join, resolve } from "path"
import { writeFileSync } from "fs"
import chalk from "chalk"

const cliVersion = "^9.7.0"

/**
 * @param {AdapterOptions} options
 */
export default function (options = defaultOptions) {
    return {
        name: "@miguelmazetto/svelte-adapter-neutralino",
        
        async adapt(builder) {

            const tmpPath = join(process.cwd(), "neutralino")
            builder.mkdirp(join(tmpPath, "build"))

            console.log(chalk.bgYellow(" Building ") + " Generating static build")
            const adapter = new staticAdapter({ pages: join(tmpPath, "build") })
            await adapter.adapt(builder)

            builder.copy(join(process.cwd(), "node_modules/@neutralinojs/lib/dist/neutralino.js"), join(tmpPath, "build/neutralino.js"))

            console.log(chalk.bgYellow(" Building ") + " Generating Neutralinojs release")
            execSync('npx --quiet "@neutralinojs/neu@' + cliVersion + '" build --release', { cwd: tmpPath })
            
            //console.log(chalk.bgYellow(" Building ") + " Finalising...")
            //builder.mkdirp(options.output)
            //builder.copy(join(tmpPath, "dist") + "/.", options.output)
//
            //console.log(
            //    chalk.bgGreen(" Success ") + " Application is available in " + chalk.cyan(resolve(options.output))
            //)
        },
    }
}
