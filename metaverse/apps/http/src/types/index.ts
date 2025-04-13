import z from "zod";

const SignupSchema = z.object({

    username: z.string().email(),
    password: z.string().min(8),
    type: z.enum(["user", "admin"])
})

const SigninSchema = z.object({

    username: z.string().email(),
    password: z.string().min(8),
    
})

export const UpdateMetadataSchema = z.object({
    avatarId: z.string()
})

export const CreateSpaceSchema = z.object({
    name: z.string(),
    dimensions: z.string().regex(/^[0-9]{1,4}x[0-9]{1,4}$/) ,
    mapId: z.string(),
})