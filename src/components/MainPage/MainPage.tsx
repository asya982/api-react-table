import { FC } from "react";
import styles from "./MainPage.module.css";
import { useSelector } from "react-redux";
import { getAuthInfo } from "../../redux/loginReducer";
import Header from "./components/Header";
import ApiTable from "./components/Table";
import { tableAPI } from "../../API/tableAPI";
import { useLoaderData } from "react-router-dom";

export const getTableData = async () => {
  try {
    const { data } = await tableAPI.getTableList();
    return { list: data };
  } catch (err: any) {
    return { list: null };
  }
};

const MainPage: FC = () => {
  const user = useSelector(getAuthInfo);
  const { list } = useLoaderData() as { list: any };

  return (
    <div className={styles.mainPage}>
      <Header name={user.username} />
      <ApiTable />
    </div>
  );
};

export default MainPage;
