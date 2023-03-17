interface IFResult {
  data?: any;
  errors?: string | string[] | null;
  statusCode?: number;
}

export const handingResponse = async (res: Response): Promise<IFResult> => {
  let errors = null;
  const result = await res.json();
  if (!res.ok) {
    throw new Error('Server internal error');
  }
  if (result?.status?.code !== 1 || result?.status?.code !== 0) {
    errors = result?.status?.message;
  }
  return {
    data: result?.data,
    errors: errors,
    statusCode: res.status,
  };
};
