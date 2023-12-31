"use client"
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";
   
  export function LoginForm({signInT}:{
    signInT:string
  }) {
    return (
       <Card color="transparent"  placeholder={undefined}
       className="p-3 w-full">
              <div className="flex justify-center w-full">
              <img
                src="/images/logo.png"
                alt="brand"
                className="h-12 w-12"
                />
                </div>
        <Typography variant="h4" color="blue-gray" placeholder={undefined}>
          {signInT}
        </Typography>
       
        <form className="mt-8 mb-2 w-full max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-6">
           
            <Typography placeholder={undefined} variant="h6" color="blue-gray" className="-mb-3">
              Your Email
            </Typography>
            <Input
          crossOrigin={undefined}
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography 
            placeholder={undefined}

            variant="h6" color="blue-gray" className="-mb-3">
              Password
            </Typography>
            <Input
          crossOrigin={undefined}

              type="password"
              size="lg"
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <Checkbox
          crossOrigin={undefined}
            label={
              <Typography
              placeholder={undefined}
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                I agree the
                <a
                  href="#"
                  className="font-medium transition-colors hover:text-gray-900"
                >
                  &nbsp;Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />
          <Button placeholder={undefined} className="mt-6" fullWidth>
            sign up
          </Button>
          <Typography placeholder={undefined} color="gray" className="mt-4 text-center font-normal">
            Already have an account?{" "}
            <a href="#" className="font-medium text-gray-900">
              Sign In
            </a>
          </Typography>
        </form>
      </Card>
    );
  }