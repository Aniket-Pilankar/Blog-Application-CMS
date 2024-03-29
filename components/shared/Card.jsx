import { Card } from "flowbite-react";

export default function Component() {
  return (
    <Card
      className="max-w-sm"
      imgSrc="https://images.pexels.com/photos/19946465/pexels-photo-19946465/free-photo-of-character-standing-in-the-meadow-of-fields-lostintespace-by-amaan.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      horizontal
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Noteworthy technology acquisitions 2021
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far,
        in reverse chronological order.
      </p>
    </Card>
  );
}
