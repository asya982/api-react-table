export type LoginForm = {
  username: string;
  password: string;
};

export interface APIResponse {
  results: TableItem[];
  count: number;
  next: string | null;
  previous: string | null;
}

export type TableItemInfo = {
  id: number;
  name: string;
  email: string;
  birthday_date: string;
  phone_number: string;
  address: string;
};

export type Contact = Omit<TableItemInfo, "id">;
