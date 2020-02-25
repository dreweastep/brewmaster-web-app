export default async (req, res) => {
    try {
        const data = [
            { name: "Drew's Hazy IPA", type: "Beer", brewStartDate: "2/4/20" },
            { name: "Drew's Cabernet Sauvignon", type: "Wine", brewStartDate: "2/5/20" },
            { name: "Aaron's Perry", type: "Cider", brewStartDate: "2/6/20" },
            { name: "Aaron's Perry", type: "Cider", brewStartDate: "2/6/20" },
            { name: "Aaron's Perry", type: "Cider", brewStartDate: "2/6/20" },
            { name: "Drew's Raspberry Ginger Booch", type: "Kombucha", brewStartDate: "2/7/20" }
        ];

        res.status(200).json(data)
    } catch (error) {
        console.log(error)
    }

}