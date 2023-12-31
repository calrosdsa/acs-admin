import {unstable_setRequestLocale} from 'next-intl/server';
import {useTranslations} from 'next-intl';
import Home from "@/ui/pages/home/Home";
// import { useTranslation } from 'next-i18next'

type Props = {
  params: {locale: string};
};

export default function Page() {
  // unstable_setRequestLocale(locale);

  const t = useTranslations('IndexPage');
  
  const getString = ():string=>{
    return t('download').toString()
  }

  return (
    <main className="">

       <Home
       download={getString()}
       />

    </main>
  )
}

