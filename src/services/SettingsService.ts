import { getCustomRepository } from "typeorm";
import { SettingsRepository } from "../repositories/SettingsRepository";

interface ISettingsCreate {
  chat: boolean;
  username: string;
}

class SettingsService {
  
  async create({ chat, username}: ISettingsCreate) {
    const settingsRespository = getCustomRepository(SettingsRepository);
    
    // Select * from settings where username = "username" limit 1;
    const userAlreadyExists = await settingsRespository.findOne({
      username
    });

    if(userAlreadyExists){
      throw new Error("User already exists!");
    }

    const settings = settingsRespository.create({
      chat,
      username,
    });
  
    await settingsRespository.save(settings);

    return settings;
  }
}

export { SettingsService }