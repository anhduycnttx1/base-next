import * as dotenv from 'dotenv';
import { handingResponse } from '@/common/handling';

dotenv.config();
const base_url = process.env['BASE_URL'];

export async function getHello() {
  const response: Response = await fetch(base_url + '/config');
  const result = await handingResponse(response);
  return result;
}
