import AllPatientsPage from "../pages/AllPatientsPage";
import AllUsersPage from "../pages/AllUsersPage";
import InfoPage from "../pages/InfoPage";
import LoginPage from "../pages/LoginPage";
import MainPage from "../pages/MainPage";
import PostPage from "../pages/PostPage";
import RegistrationPage from "../pages/RegistrationPage";
import {
  INFO_ROUTE,
  LOGIN_ROUTE,
  MAIN_ROUTE,
  REGISTRATION_ROUTE,
  DONATION_ROUTE,
  ALL_USERS,
  ALL_PATIENTS,
  PATIENTREQ_ROUTE,
  ALL_DONORS,
} from "./routesData";

export const patientRoutes = [
  {
    path: PATIENTREQ_ROUTE,
    element: <PostPage role="пациент" />,
    title: "Получить кровь",
  },
  {
    path: ALL_DONORS,
    element: <AllPatientsPage role="донор" />,
    title: "Доноры",
  },
];

export const donorRoutes = [
  {
    path: DONATION_ROUTE,
    element: <PostPage role="донор" />,
    title: "Сдать кровь",
  },
  {
    path: ALL_PATIENTS,
    element: <AllPatientsPage role="пациент" />,
    title: "Пациенты",
  },
];
export const clinicsRoutes = [
  ...patientRoutes,
  ...donorRoutes,
  {
    path: ALL_USERS,
    element: <AllUsersPage />,
    title: "Пользователи",
  },
];

export const publicRoutes = [
  {
    path: MAIN_ROUTE,
    element: <MainPage />,
    title: "Главная",
  },
  {
    path: INFO_ROUTE,
    element: <InfoPage />,
    title: "Информация",
  },
];
export const isntAuthRoutes = [
  {
    path: REGISTRATION_ROUTE,
    element: <RegistrationPage />,
    title: "Регистрация",
  },
  {
    path: LOGIN_ROUTE,
    element: <LoginPage />,
    title: "Логин",
  },
];
