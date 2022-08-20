import { PrismaClient, Admin } from '@prisma/client';

export default class AdminModel {
  private prismaClient;

  constructor() {
    this.prismaClient = new PrismaClient();
  }

  public async create(
    name: string,
    email: string,
    password: string,
    role: string,
  ): Promise<Admin> {
    const newAdmin = await this.prismaClient.admin.create({
      data: {
        name,
        email,
        password,
        role,
      },
    });
    return newAdmin;
  }

  public async update(
    id: string,
    name: string,
    email: string,
    password: string,
    role: string,
  ): Promise<Admin> {
    const newUpdate = await this.prismaClient.admin.update({
      where: { id },
      data: {
        name,
        email,
        password,
        role,
      },
    });
    return newUpdate;
  }

  public async delete(id: string): Promise<Admin> {
    const erasing = await this.prismaClient.admin.delete({ where: { id } });
    return erasing;
  }
}
