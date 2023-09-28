import { getFilesFormated } from '../helpers/Request';

export async function loader() {
  try {
    const files = await getFilesFormated();
    return { files };
  } catch (error) {
    console.error('Error fetching files:', error);
    return { files: [] };
  }
}
