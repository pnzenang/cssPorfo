import {
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Services, Projects, Connect } from "./components";
import {
  Home,
  Contact,
  About,
  Error,
  Login,
  Auth,
  Welcome,
  Landing,
  Register,
  ResetPassword,
  ForgotPassword,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Auth />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Welcome />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "reset-password",
        element: <ResetPassword />,
      },
      {
        path: "home",
        element: <Home />,
        children: [
          {
            index: true,
            element: <About />,
          },
          {
            path: "services",
            element: <Services />,
          },
          {
            path: "contact",
            element: <Contact />,
          },
        ],
      },
      // {
      //   path: "dashboard",
      //   element: (
      //     <DashboardLayout
      //       isDarkThemeEnabled={isDarkThemeEnabled}
      //       queryClient={queryClient}
      //     />
      //   ),
      //   loader: dashboardLoader(queryClient),
      //   children: [
      //     {
      //       index: true,
      //       // path: "add-member",
      //       element: <AddMember />,
      //       action: addMemberAction(queryClient),
      //     },
      //     {
      //       path: "stats",
      //       element: <Stats />,
      //       loader: statsLoader(queryClient),
      //       errorElement: <ErrorElement />,
      //     },
      //     {
      //       path: "all-members",
      //       // index: true,
      //       element: <AllMembers />,
      //       loader: allMembersLoader(queryClient),
      //       errorElement: <ErrorElement />,
      //     },
      //     {
      //       path: "all-members-admin",
      //       element: <AllMembersAdmin />,
      //       loader: allMembersAdminLoader(queryClient),
      //       errorElement: <ErrorElement />,
      //     },
      //     // {
      //     //   path: "profile",
      //     //   element: <Profile />,
      //     //   action: profileAction(queryClient),
      //     // },

      //     {
      //       path: "admin",
      //       element: <Admin />,
      //       loader: adminLoader,
      //     },
      //     {
      //       path: "edit-member/:id",
      //       element: <EditMember />,
      //       loader: editMemberLoader(queryClient),
      //       action: editMemberAction(queryClient),
      //     },
      //     {
      //       path: "delete-member/:id",
      //       action: deleteMemberAction(queryClient),
      //     },
      //   ],
      // },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
