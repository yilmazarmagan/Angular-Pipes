import { User } from '../model/user';

export const userData: User.IUser = {
  id: 1,
  firstName: 'ali',
  lastName: 'yılmaz',
  ssn: 111.123789,
  department: 'IT',
  birthday: new Date('1991-01-01'),
  salary: 18000.58,
  salaryPercentage: 0.1282,
  martialStatus: 'Single',
  address: 'Bakırköy/Istanbul',
  isManager: { manager: 'Yes', developer: 'No' },
  skills: ['Teamwork', 'Self-management', 'Willingness to learn'],
};
