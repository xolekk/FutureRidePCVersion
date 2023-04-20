import { client } from "@/lib/sanity";

const getActiveTrips = async (req, res) => {

  try {
    const query = `
    *[_type == "activeTrip" && passengerWallet == "${req.query.passengerWallet}"]
    `
    const sanityResponse = await client.fetch(query)
    
    res.status(200).send({ message: 'success', data: sanityResponse })
  } catch (error) {
    res.status(500).send({ message: 'error', data: error.message })
  }
}

export default getActiveTrips