
import { LoginForm } from "@/ui/pages/auth/login/Login"
import { useTranslations } from "next-intl";
import Button from '@mui/material/Button';

const Page = () =>{

  const t = useTranslations('IndexPage');
 

    return(
        <div className="grid md:grid-cols-2 h-full">
            <div></div>

            <div className=" grid place-content-center ">
            <div className="">
            {/* <LoginForm
            signInT={t("signIn")}
            /> */}
            <Button variant="contained">Primary</Button>
            <Button variant="contained" color="secondary" sx={{ ml: 2 }}>
                Secondary
            </Button>
            </div>
            </div>

        </div>
    )
}

export default Page