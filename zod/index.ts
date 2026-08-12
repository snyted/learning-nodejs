import { z } from "zod"

// 01
const usernameSchema = z.string().min(3).max(20)
console.log(usernameSchema.parse('vitor'))


// 02
const userSchema = z.object({
    email: z.email("Email inválido"),
    age: z.number().min(18).max(100),
    username: z.string().min(2).optional()
})

const user = {
    email: 'vitoremail.com',
    age: 25,
    username: 'snyted'
}


const { success, error } = userSchema.safeParse(user)

console.log(success, error?.message[0])

// 03

const cartSchema = z.object({
    clientId: z.uuid(),
    products: z.array(
        z.object({
            name: z.string().min(3),
            price: z.number().min(1),
            qnt: z.number().min(1),
            categories: z.array(z.string().min(1))
        })
    )
})

const cart = {
    clientId: crypto.randomUUID(),
    products: [
        {
            name: "Macbook",
            price: 5000,
            qnt: 1,
            categories: ["Eletronico", "Computador"]
        }
    ]
}

console.log(cartSchema.safeParse(cart))

const cart02 = {
    clientId: crypto.randomUUID(),
    products: [
        {
            name: "Mouse",
            price: 0,
            qnt: 1,
            categories: ["Eletronico", "Computador", "Periferico"]
        }
    ]
}

console.log("Schema Cart 02: ", cartSchema.safeParse(cart02).error?.message)