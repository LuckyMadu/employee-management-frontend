![employee_management_diagram drawio](https://user-images.githubusercontent.com/19740478/230542021-24d5bbf6-6afb-4247-ba8f-f5dc9842b804.png)

<table>
  <tr>
    <td>Frontend</td>
    <td>https://employee-management-portal.vercel.app/</td>
  </tr>
   <tr>
    <td>Backend</td>
    <td>https://employee-management-backend.vercel.app </td>
  </tr>
</table>

## Getting Started

Backend Repository for the solution: https://github.com/LuckyMadu/employee-management-backend

This is a frontend application built using Next.js. It also uses an .env file to handle environment variables.

To get started with this project, clone the repository to your local machine:

```
git clone https://github.com/LuckyMadu/employee-management-frontend.git
```

After cloning the repository, navigate to the project directory and install the dependencies:

```
cd employee-management-frontend
npm install
```

## Configuration

This project uses an .env file to handle environment variables. You can create an .env file in the root of the project and add your variables to it. For example:

```
NEXT_PUBLIC_BASE_URL=https://api.example.com
```

To use the variables in your code, you can use the process.env object. For example:

```
const apiUrl = process.env.NEXT_PUBLIC_BASE_URL;
```

## Development

To start the development server, run:

```
npm run dev
```

This will start the Next.js development server at [http://localhost:3000](http://localhost:3000). Any changes you make to the code will be automatically reloaded.

You can start editing the page by modifying `src/app/page.tsx`. The page auto-updates as you edit the file

## Building

To build the production-ready version of the application, run:

```
npm run build
```

This will create a production build of the application in the .next directory.

## Running

To run the production build of the application, run:

```
npm start
```

This will start the production server at http://localhost:3000.

<table>
  <tr>
    <td>Home - List View</td>
    <td>Home - Table View</td>
  </tr>
  <tr>
    <td>
      <img src="https://user-images.githubusercontent.com/19740478/230440211-cfda79ff-8898-4c27-b43f-6999149ba77b.png" width=800 height=300>
    </td>
    <td> 
      <img src="https://user-images.githubusercontent.com/19740478/230440904-0940bb76-bbba-4e84-91a6-2893f7972187.png" width=800 height=300>         
    </td>
  </tr>
</table>


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
