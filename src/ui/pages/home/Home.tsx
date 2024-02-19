'use client';

import { API_URL } from "@/config/const";
import DatePicker from "@/ui/components/datepicker/DatePicker";
import { Button, TextField, Typography } from "@mui/material";

import axios from "axios";
import moment from "moment";
const Home = ({download}:{
    // translate:(e:string)=>string
    download:string
  }) =>{
    const downloadFile = async() => {
      // http://172.20.20.57:9090/v1/reporte/empleados/
        const date = moment().format('LLLL').replace(":",";");
        await axios.post(`${API_URL}/reporte/empleados/`,{
          "cardHolderGuid":"1910a888-c931-483b-bcd4-d5a2370f96b5",
          "lang":"es",
          "start_date":"2024-02-02",
          "end_date":"2024-02-08 23:00:00",
        },{
            responseType:"blob"
        }).then((response)=>{
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', `${date} - Deposito.xlsx`); //or any other extension
            document.body.appendChild(link);
            link.click();
        })
      }

    return (
        <>
          
          <main className="">
      <Button variant="contained" onClick={()=>downloadFile()}
      >{download}</Button>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" size="small"/>
       <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
          enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
          imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
          Convallis convallis tellus id interdum velit laoreet id donec ultrices.
          Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
          nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
          leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
          feugiat vivamus at augue. At augue eget arcu dictum varius duis at
          consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
          sapien faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
          eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
          neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
          tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
          sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
          tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
          gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
          et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
          tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>

    </main>
        </>
    )
}

export default Home;