import 'dotenv/config';
import * as joi from 'joi';

interface EnvPdf {

PORT: number;

DATABASE_URL: string;
}

const envSchema=joi.object({
    PORT:joi.number().required(),
    DATABASE_URL: joi.string().required(),
})
.unknown(true);

const {error,value} = envSchema.validate(process.env);

if (error){
    throw new Error('config validation error');
}

const envPdf:EnvPdf=value;

export const envs={
    port:envPdf.PORT,
    database_url:envPdf.DATABASE_URL,
}