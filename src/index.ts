import { MaqeBot } from './maqeBot'

const input = process.argv[2]
const meqeBot = new MaqeBot(input)
const result = meqeBot.run()

console.log(result);

