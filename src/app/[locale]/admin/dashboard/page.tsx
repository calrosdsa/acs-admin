import { API_URL } from "@/config/const";
import { TextField, Typography } from "@mui/material";
import axios from "axios";
import moment from "moment";
import { useTranslations } from "next-intl";
import { useTheme } from '@mui/material/styles';
import Button from "@/ui/components/button/Button";
import Home from "@/ui/pages/home/Home";

export default function Page() {
  const t = useTranslations('IndexPage');
 
  return (
    <main className="">
      <Home
      download={t('download')}
      />
    </main>
  )
}
