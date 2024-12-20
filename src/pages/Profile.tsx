import { MedMastersDrawer } from "../modules/homepage/drawer/Drawer";
import { DigiProfile } from "../modules/profile/Profile";
import { AppContext } from "../context/app";
import { ContextProps } from "../context/interface";
import { useContext } from "react";

export const DigicareProfile = () => {
  const { user } = useContext(AppContext) as ContextProps;

  return (
    <MedMastersDrawer>
      {user ? <DigiProfile user={user} isEdit={true} /> : <></>}
    </MedMastersDrawer>
  );
};
