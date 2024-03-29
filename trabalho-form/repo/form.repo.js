import { PrismaClient } from '@prisma/client'
import bcrypt from "bcrypt";
export async function createCad(form) {
    let { name, data_nasci, altura, idade, email } = form;
    if (!name || !data_nasci || !altura || !idade || !email) {
        throw new Error('Campos obrigatorios nao foram preenchidos')
    }
    name = await bcrypt.hash(name, 10);
    const prisma = new PrismaClient()
    return await prisma.form.create({ data: { name, data_nasci, altura, idade, email} });
}
export async function getCadByEmail(email) {
    const prisma = new PrismaClient()
    let u = await prisma.form.findUnique({ where: { email } });
    return u;
}
export async function getCadById(id) {
    const prisma = new PrismaClient()
    return prisma.form.findUnique({ where: { id } });
}
export async function deleteCad(id) {
    const prisma = new PrismaClient()
    return prisma.form.delete({ where: { id } });
}
export async function updateCad(id, form) {
    const prisma = new PrismaClient()
    let { name, data_nasci, altura, idade, email } = form;
    if (!name || !data_nasci || !altura || !idade || !email) {
        throw new Error('Campos obrigatorios nao foram preenchidos')
    }
    name = await bcrypt.hash(name, 10);
    return prisma.form.update({ where: { id }, data: form });
}

