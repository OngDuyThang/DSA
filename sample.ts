type BS = {
    coverType?: string,
    location?: string
} | {
    vesselType?: string,
    vesselName?: string
} | {
    vehicleType?: string,
    make?: string,
    model?: string
}

const bs: BS = { vesselName: '', location: '' }

type MyType = {
    a: string
} | {
    b: number
}

const bs111: MyType = {
    a: '',
    b: 1
}