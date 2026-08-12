import { z } from "zod"

const usernameSchema = z.string().min(3).max(20)

console.log(usernameSchema.parse('vitor'))