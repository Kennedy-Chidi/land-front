export default function ({ store, redirect, route }) {
  const protectedRoutes = [
    "dashboard",
    "deposit",
    "confirm-deposit",
    "withdrawal",
    "deposit-list",
    "earning",
    "history",
    "profile",
    "referral",
  ];

  if (store.state.auth.loggedIn) {
    const path = route.name;
    let redirectAdmin = false;
    protectedRoutes.forEach((el) => {
      if (path == el && store.state.auth.user.status == "Admin") {
        redirectAdmin = true;
      }
    });
    if (redirectAdmin) {
      return redirect("/admin");
    }
  }

  if (!store.state.auth.loggedIn) {
    const path = route.name;
    if (path.includes("admin")) {
      return redirect("/");
    }

    protectedRoutes.forEach((el) => {
      if (path.includes(el)) {
        return redirect("/");
      }
    });
  }
}
