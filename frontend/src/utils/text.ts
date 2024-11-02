export function generateMessege(name: string, address: string, businessName: string, messege: string) {
    return `
Nama: ${name}%0A
Alamat: ${address}%0A
Nama Bisnis: ${businessName}%0A
Pesan: ${messege}%0A
`
}