import { PrismaClient, Users } from '@prisma/client';

export default class UserModel {
  private prismaClient;

  constructor() {
    this.prismaClient = new PrismaClient();
  }

  public async create(name: string, email: string, password: string): Promise<Users> {
    const newAdmin = await this.prismaClient.users.create({
      data: { name, email, password },
    });
    return newAdmin;
  }

  public async update(
    id: string,
    name: string,
    email: string,
    password: string,
  ): Promise<Users> {
    const newUpdate = await this.prismaClient.users.update({
      where: { id },
      data: {
        name,
        email,
        password,
      },
    });
    return newUpdate;
  }

  public async delete(id: string): Promise<Users> {
    const erasing = await this.prismaClient.users.delete({ where: { id } });
    return erasing;
  }
}
