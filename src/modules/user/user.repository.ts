import { Repository } from 'typeorm';
import { User } from 'src/entities/user.entity';

export class UserRepository extends Repository<User> {
  // Custom repository methods and queries can be defined here if needed
}
