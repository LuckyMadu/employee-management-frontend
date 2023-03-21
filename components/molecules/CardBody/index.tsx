import { FC } from "react";

const CardBody: FC = () => {
  return (
    <div className="">
      <dl className="max-w-md text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
        <div className="flex flex-col pb-3">
          <dt className="text-gray-500 dark:text-gray-400">Name</dt>
          <dd className="font-semibold"> Lahiru Amaratunga</dd>
        </div>
        <div className="flex flex-col pb-3">
          <dt className="text-gray-500 dark:text-gray-400">Email</dt>
          <dd className="font-semibold">yourname@flowbite.com</dd>
        </div>
        <div className="flex flex-col py-3">
          <dt className="text-gray-500 dark:text-gray-400">Gender</dt>
          <dd className="font-semibold">M</dd>
        </div>
        <div className="flex flex-col pt-3">
          <dt className="text-gray-500 dark:text-gray-400">Phone number</dt>
          <dd className="font-semibold">+00 123 456 789</dd>
        </div>
      </dl>
    </div>
  );
};

export default CardBody;
