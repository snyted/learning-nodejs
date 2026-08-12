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