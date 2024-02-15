const { exec } = require('child_process')

const SYMBLE = '@'
const LENGTH = 20

let SIZE = 0

let load02 = true
let load03 = true
let load04 = true
let load05 = true
let load06 = true
let load07 = true
let load08 = true
let load09 = true
let load010 = true
let load011 = true
let load012 = true
let load013 = true
let load014 = true
let load015 = true
let load016 = true
let load017 = true
let load018 = true
let load019 = true
let load020 = true

let process01 = null
let process02 = null
let process03 = null
let process04 = null
let process05 = null
let process06 = null
let process07 = null
let process08 = null
let process09 = null
let process010 = null
let process011 = null
let process012 = null
let process013 = null
let process014 = null
let process015 = null
let process016 = null
let process017 = null
let process018 = null
let process019 = null
let process020 = null


process.argv.slice(2).forEach(function (data, index) {
    try {
        if (index == 0) {
            let size = parseInt(data)
        
            SIZE = (size-1)*LENGTH

            console.log('★★★---START---★★★')

            connect01()
        }
    } catch (error) {
        console.log('Index Error:', error)
    }
})

async function connect01() {
    process01 = exec('node root.js '+(SIZE+1))

    process01.stdout.on('data', (data) => {
        let log = data.toString().trimStart().trimEnd()
        if (log.length > 0) {
            console.log(log)
        }
        if(data.toString().includes(SYMBLE+SYMBLE+'---EXIT----')) {
            connect01()
        }
        if (load02) {
            if (data.toString().includes(SYMBLE+SYMBLE+'---LOAD----')) {
                load02 = false
                connect02()
            }
        }
    })
}

async function connect02() {
    process02 = exec('node root.js '+(SIZE+2))

    process02.stdout.on('data', (data) => {
        let log = data.toString().trimStart().trimEnd()
        if (log.length > 0) {
            console.log(log)
        }
        if(data.toString().includes(SYMBLE+SYMBLE+'---EXIT----')) {
            connect02()
        }
        if (load03) {
            if (data.toString().includes(SYMBLE+SYMBLE+'---LOAD----')) {
                load03 = false
                connect03()
            }
        }
    })
}

async function connect03() {
    process03 = exec('node root.js '+(SIZE+3))

    process03.stdout.on('data', (data) => {
        let log = data.toString().trimStart().trimEnd()
        if (log.length > 0) {
            console.log(log)
        }
        if(data.toString().includes(SYMBLE+SYMBLE+'---EXIT----')) {
            connect03()
        }
        if (load04) {
            if (data.toString().includes(SYMBLE+SYMBLE+'---LOAD----')) {
                load04 = false
                connect04()
            }
        }
    })
}

async function connect04() {
    process04 = exec('node root.js '+(SIZE+4))

    process04.stdout.on('data', (data) => {
        let log = data.toString().trimStart().trimEnd()
        if (log.length > 0) {
            console.log(log)
        }
        if(data.toString().includes(SYMBLE+SYMBLE+'---EXIT----')) {
            connect04()
        }
        if (load05) {
            if (data.toString().includes(SYMBLE+SYMBLE+'---LOAD----')) {
                load05 = false
                connect05()
            }
        }
    })
}

async function connect05() {
    process05 = exec('node root.js '+(SIZE+5))

    process05.stdout.on('data', (data) => {
        let log = data.toString().trimStart().trimEnd()
        if (log.length > 0) {
            console.log(log)
        }
        if(data.toString().includes(SYMBLE+SYMBLE+'---EXIT----')) {
            connect05()
        }
        if (load06) {
            if (data.toString().includes(SYMBLE+SYMBLE+'---LOAD----')) {
                load06 = false
                connect06()
            }
        }
    })
}

async function connect06() {
    process06 = exec('node root.js '+(SIZE+6))

    process06.stdout.on('data', (data) => {
        let log = data.toString().trimStart().trimEnd()
        if (log.length > 0) {
            console.log(log)
        }
        if(data.toString().includes(SYMBLE+SYMBLE+'---EXIT----')) {
            connect06()
        }
        if (load07) {
            if (data.toString().includes(SYMBLE+SYMBLE+'---LOAD----')) {
                load07 = false
                connect07()
            }
        }
    })
}

async function connect07() {
    process07 = exec('node root.js '+(SIZE+7))

    process07.stdout.on('data', (data) => {
        let log = data.toString().trimStart().trimEnd()
        if (log.length > 0) {
            console.log(log)
        }
        if(data.toString().includes(SYMBLE+SYMBLE+'---EXIT----')) {
            connect07()
        }
        if (load08) {
            if (data.toString().includes(SYMBLE+SYMBLE+'---LOAD----')) {
                load08 = false
                connect08()
            }
        }
    })
}

async function connect08() {
    process08 = exec('node root.js '+(SIZE+8))

    process08.stdout.on('data', (data) => {
        let log = data.toString().trimStart().trimEnd()
        if (log.length > 0) {
            console.log(log)
        }
        if(data.toString().includes(SYMBLE+SYMBLE+'---EXIT----')) {
            connect08()
        }
        if (load09) {
            if (data.toString().includes(SYMBLE+SYMBLE+'---LOAD----')) {
                load09 = false
                connect09()
            }
        }
    })
}

async function connect09() {
    process09 = exec('node root.js '+(SIZE+9))

    process09.stdout.on('data', (data) => {
        let log = data.toString().trimStart().trimEnd()
        if (log.length > 0) {
            console.log(log)
        }
        if(data.toString().includes(SYMBLE+SYMBLE+'---EXIT----')) {
            connect09()
        }
        if (load010) {
            if (data.toString().includes(SYMBLE+SYMBLE+'---LOAD----')) {
                load010 = false
                connect010()
            }
        }
    })
}

async function connect010() {
    process010 = exec('node root.js '+(SIZE+10))

    process010.stdout.on('data', (data) => {
        let log = data.toString().trimStart().trimEnd()
        if (log.length > 0) {
            console.log(log)
        }
        if(data.toString().includes(SYMBLE+SYMBLE+'---EXIT----')) {
            connect010()
        }
        if (load011) {
            if (data.toString().includes(SYMBLE+SYMBLE+'---LOAD----')) {
                load011 = false
                connect011()
            }
        }
    })
}

async function connect011() {
    process011 = exec('node root.js '+(SIZE+11))

    process011.stdout.on('data', (data) => {
        let log = data.toString().trimStart().trimEnd()
        if (log.length > 0) {
            console.log(log)
        }
        if(data.toString().includes(SYMBLE+SYMBLE+'---EXIT----')) {
            connect011()
        }
        if (load012) {
            if (data.toString().includes(SYMBLE+SYMBLE+'---LOAD----')) {
                load012 = false
                connect012()
            }
        }
    })
}

async function connect012() {
    process012 = exec('node root.js '+(SIZE+12))

    process012.stdout.on('data', (data) => {
        let log = data.toString().trimStart().trimEnd()
        if (log.length > 0) {
            console.log(log)
        }
        if(data.toString().includes(SYMBLE+SYMBLE+'---EXIT----')) {
            connect012()
        }
        if (load013) {
            if (data.toString().includes(SYMBLE+SYMBLE+'---LOAD----')) {
                load013 = false
                connect013()
            }
        }
    })
}

async function connect013() {
    process013 = exec('node root.js '+(SIZE+13))

    process013.stdout.on('data', (data) => {
        let log = data.toString().trimStart().trimEnd()
        if (log.length > 0) {
            console.log(log)
        }
        if(data.toString().includes(SYMBLE+SYMBLE+'---EXIT----')) {
            connect013()
        }
        if (load014) {
            if (data.toString().includes(SYMBLE+SYMBLE+'---LOAD----')) {
                load014 = false
                connect014()
            }
        }
    })
}

async function connect014() {
    process014 = exec('node root.js '+(SIZE+14))

    process014.stdout.on('data', (data) => {
        let log = data.toString().trimStart().trimEnd()
        if (log.length > 0) {
            console.log(log)
        }
        if(data.toString().includes(SYMBLE+SYMBLE+'---EXIT----')) {
            connect014()
        }
        if (load015) {
            if (data.toString().includes(SYMBLE+SYMBLE+'---LOAD----')) {
                load015 = false
                connect015()
            }
        }
    })
}

async function connect015() {
    process015 = exec('node root.js '+(SIZE+15))

    process015.stdout.on('data', (data) => {
        let log = data.toString().trimStart().trimEnd()
        if (log.length > 0) {
            console.log(log)
        }
        if(data.toString().includes(SYMBLE+SYMBLE+'---EXIT----')) {
            connect015()
        }
        if (load016) {
            if (data.toString().includes(SYMBLE+SYMBLE+'---LOAD----')) {
                load016 = false
                connect016()
            }
        }
    })
}

async function connect016() {
    process016 = exec('node root.js '+(SIZE+16))

    process016.stdout.on('data', (data) => {
        let log = data.toString().trimStart().trimEnd()
        if (log.length > 0) {
            console.log(log)
        }
        if(data.toString().includes(SYMBLE+SYMBLE+'---EXIT----')) {
            connect016()
        }
        if (load017) {
            if (data.toString().includes(SYMBLE+SYMBLE+'---LOAD----')) {
                load017 = false
                connect017()
            }
        }
    })
}

async function connect017() {
    process017 = exec('node root.js '+(SIZE+17))

    process017.stdout.on('data', (data) => {
        let log = data.toString().trimStart().trimEnd()
        if (log.length > 0) {
            console.log(log)
        }
        if(data.toString().includes(SYMBLE+SYMBLE+'---EXIT----')) {
            connect017()
        }
        if (load018) {
            if (data.toString().includes(SYMBLE+SYMBLE+'---LOAD----')) {
                load018 = false
                connect018()
            }
        }
    })
}

async function connect018() {
    process018 = exec('node root.js '+(SIZE+18))

    process018.stdout.on('data', (data) => {
        let log = data.toString().trimStart().trimEnd()
        if (log.length > 0) {
            console.log(log)
        }
        if(data.toString().includes(SYMBLE+SYMBLE+'---EXIT----')) {
            connect018()
        }
        if (load019) {
            if (data.toString().includes(SYMBLE+SYMBLE+'---LOAD----')) {
                load019 = false
                connect019()
            }
        }
    })
}

async function connect019() {
    process019 = exec('node root.js '+(SIZE+19))

    process019.stdout.on('data', (data) => {
        let log = data.toString().trimStart().trimEnd()
        if (log.length > 0) {
            console.log(log)
        }
        if(data.toString().includes(SYMBLE+SYMBLE+'---EXIT----')) {
            connect019()
        }
        if (load020) {
            if (data.toString().includes(SYMBLE+SYMBLE+'---LOAD----')) {
                load020 = false
                connect020()
            }
        }
    })
}

async function connect020() {
    process020 = exec('node root.js '+(SIZE+20))

    process020.stdout.on('data', (data) => {
        let log = data.toString().trimStart().trimEnd()
        if (log.length > 0) {
            console.log(log)
        }
        if(data.toString().includes(SYMBLE+SYMBLE+'---EXIT----')) {
            connect020()
        }
    })
}
