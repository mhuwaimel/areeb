import { saudiDistricts } from "@/data/districts";

export default async function handler(req, res) {
  var newArray = saudiDistricts.filter(
    (item) => item.city_id === 3 && item.region_id === 1
  );

  res.status(200).json({ allRecords: newArray.length, data: newArray });
}
