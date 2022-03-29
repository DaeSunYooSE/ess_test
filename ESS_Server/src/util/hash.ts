import * as bcrypt from 'bcrypt'

const SALT_OR_ROUNDS = 10

export const hashText = async(text: string): Promise<string> => {
    return await bcrypt.hash(text, SALT_OR_ROUNDS)
}

export const isHashValid = async (text: string, hashText: string): Promise<boolean> => {
    return await bcrypt.compare(text, hashText)
}