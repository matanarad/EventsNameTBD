import { useEffect, useState } from "react";
import "./EventBox.css";
import { useParams } from "react-router-dom";
import tempEventImage from "../../../img/Temp Event Img.png";
import addressIcon from "../../../img/pointonmap.svg";
import dateIcon from "../../../img/calendar.svg";
import checkIcon from "../../../img/check.svg";
import xIcon from "../../../img/red-x.svg";
import { useNavigate } from "react-router-dom";
import scanIcon from "../../../img/scanIcon.svg";
function EventBox({
  eventID,
  relationship,
  setIsQRPopUpActive,
  setIsCancelPopUpActive,
}) {
  const { userID } = useParams();
  const [eventImage, setEventImage] = useState("");
  const [eventViews, setEventViews] = useState(0);
  const [eventMoney, setEventMoney] = useState(0);
  const [eventAcceptedTickets, setEventAcceptedTickets] = useState(0);
  const [eventPendingTickets, setEventPendingTickets] = useState(0);

  const [eventAddress, setEventAddress] = useState("");

  const [eventDate, setEventDate] = useState("");

  const [extendedData, setExtendedData] = useState([]);

  useEffect(() => {
    //ToDo get from BE by eventID eventID

    setEventAddress("Maslak, 34485 Sarıyer/İstanbul, Türkiye");
    setEventDate("Aug 31, 2024 4:00 PM");
    setEventImage(tempEventImage);
    if (relationship === "owner" || relationship === "manager") {
      setExtendedData([
        {
          name: "Matan Arad",
          age: 21,
          transactionId: "123",
        },
        {
          name: "שחר דוד",
          age: 20,
          transactionId: "1243",
        },
      ]);
    } else {
      if (eventID === 123) {
        setExtendedData([
          {
            status: "Pending",
            price: 120,
            QR: "",
            transactionId: "transactionId-123",
          },
        ]);
      } else {
        setExtendedData([
          {
            status: "Approved",
            price: 120,
            QR: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCAFMAUwDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAgJCv/EADIQAAADAwoBDQEAAAAAAAAAABIUFggRFQADExghJ0FFYmSGCRcZIjlCR2NnaKbF5JT/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A1TkkkkCSSSQJJJJAkkkkCSSSQJJJJAkkkkCSSSQJJJJAkkkkCSSSQJJJJAkkkkCSSSQJJJJAkkkkCSSSQJJJJAkkkkCSSSQJJJJAkkkkEqtztz1LkTdcsVjEs7h5UoW288MRnS4GL7JV6c72u/NvwScud4J8SfWyqpuduepcibrlisYlncPKlC23nhiM6XAxfYEq9Od7Xfm34JOnO9rvzb8EnTne135t+CTlzvBPiT62QaqSlVhhueuitrrkcjobncQNGzO3mQBLanjwdbVUkglVuduepcibrlisYlncPKlC23nhiM6XAxfYbnbnqXIm65YrGJZ3DypQtt54YjOlwMX2ZVtzsMVLkTeisVjEskh5UoW3E8MRnS4GL7JVkG/zDDc9dFbXXI5HQ3O4gaNmdvMgCW1PHg62qpZV9i56xc8XD0KhP9dPSxPywUPeH1dVJAlKrDDc9dFbXXI5HQ3O4gaNmdvMgCW1PHg60ww3PXRW11yOR0NzuIGjZnbzIAltTx4OtlXkMfGzhv7KQOnO9rvzb8EtVJZV9Bj7ovhP75Sqww3PUuW11yxWMNzuHlShnbzwxGdLgYvsDVRuduepcibrlisYlncPKlC23nhiM6XAxfZKvTne135t+CWVckg1U6c72u/NvwSqpuduepcibrlisYlncPKlC23nhiM6XAxfZKvLneCfEn1stVJBKrDDc9dFbXXI5HQ3O4gaNmdvMgCW1PHg603O3PUuRN1yxWMSzuHlShbbzwxGdLgYvslXsXPWLni4ehUJ/rp6WJ+WCh7w+rKrDDc9S5bXXLFYw3O4eVKGdvPDEZ0uBi+wNVGGG566K2uuRyOhudxA0bM7eZAEtqePB1tVSwBbnYYqXIm9FYrGJZJDypQtuJ4YjOlwMX2GGGGK6K2vRRyOhuSRA0bM7iZAEtqePB1ob/SS5V5aqdBj7ovhP75BqpJKVW52GK6KJvRRyOiWSRA0bLbiZAEtqePB1uAMg6qJSq3O3PUuRN1yxWMSzuHlShbbzwxGdLgYvslXpzva782/BLVSQJSqww3PXRW11yOR0NzuIGjZnbzIAltTx4OtNzsMV0UTeijkdEskiBo2W3EyAJbU8eDrZV7Fz1i54uHoVCf66eliflgoe8PqhVTc7c9S5E3XLFYxLO4eVKFtvPDEZ0uBi+yVenO9rvzb8EqqYYYYqXLa9FYrGG5JDypQzuJ4YjOlwMX2ZVsMMMV0VteijkdDckiBo2Z3EyAJbU8eDrQ1UbnbnqXIm65YrGJZ3DypQtt54YjOlwMX2G5256lyJuuWKxiWdw8qULbeeGIzpcDF9lVSyr5c7wT4k+tkDpzva782/BJ053td+bfglVTc7c9S5E3XLFYxLO4eVKFtvPDEZ0uBi+yVenO9rvzb8EgdOd7Xfm34JaqSyr5c7wT4k+tlqpIEkkkgSSSSDKvlzvBPiT62TlzvBPiT62TlzvBPiT62Tpzva782/BIMq5aqcud4J8SfWydOd7Xfm34JSq3O3PXRRN1yOR0SzuIGjZbbzIAltTx4OtDVRuduepcibrlisYlncPKlC23nhiM6XAxfYbnYYroom9FHI6JZJEDRstuJkAS2p48HWm5256lyJuuWKxiWdw8qULbeeGIzpcDF9huduepcibrlisYlncPKlC23nhiM6XAxfYGVbc7c9dFE3XI5HRLO4gaNltvMgCW1PHg62qu2j9HeZ3iGKxb+SgooZ5g6bug61VNztz1LkTdcsVjEs7h5UoW288MRnS4GL7Mq252GKlyJvRWKxiWSQ8qULbieGIzpcDF9gSrKqmGG56ly2uuWKxhudw8qUM7eeGIzpcDF9hudhipcib0VisYlkkPKlC24nhiM6XAxfZVXLneCfEn1sglVhhuepctrrlisYbncPKlDO3nhiM6XAxfYbnbnroom65HI6JZ3EDRstt5kAS2p48HW1V2LnrFzxcPQqE/109LE/LBQ94fVdi56xc8XD0KhP9dPSxPywUPeH1Qcud4J8SfWyyrlqpy53gnxJ9bKqm5256lyJuuWKxiWdw8qULbeeGIzpcDF9gZVsMNz1LltdcsVjDc7h5UoZ288MRnS4GL7Kq6c72u/NvwScud4J8SfWylVudhipcib0VisYlkkPKlC24nhiM6XAxfYG/0sq+XO8E+JPrZSq3OwxUuRN6KxWMSySHlShbcTwxGdLgYvsNzsMVLkTeisVjEskh5UoW3E8MRnS4GL7A1UbnYYroom9FHI6JZJEDRstuJkAS2p48HWyry53gnxJ9bJy53gnxJ9bJy53gnxJ9bIMq5aqdtH6O8zvEMVi38lBRQzzB03dB1pVbnYYqXIm9FYrGJZJDypQtuJ4YjOlwMX2aqNztz1LkTdcsVjEs7h5UoW288MRnS4GL7AlXpzva782/BKVWGG56ly2uuWKxhudw8qUM7eeGIzpcDF9hudhipcib0VisYlkkPKlC24nhiM6XAxfZqo3O3PUuRN1yxWMSzuHlShbbzwxGdLgYvsDKthhuepctrrlisYbncPKlDO3nhiM6XAxfZqo3OwxXRRN6KOR0SySIGjZbcTIAltTx4OtlXlzvBPiT62TlzvBPiT62QVUwwwxUuW16KxWMNySHlShncTwxGdLgYvslXpzva782/BJy53gnxJ9bKqm5256lyJuuWKxiWdw8qULbeeGIzpcDF9gG5256lyJuuWKxiWdw8qULbeeGIzpcDF9lVSyr7Fz1i54uHoVCf66eliflgoe8Pq1U3O3PUuRN1yxWMSzuHlShbbzwxGdLgYvsDKtudueuiibrkcjolncQNGy23mQBLanjwdbVXbR+jvM7xDFYt/JQUUM8wdN3QdaVW52GKlyJvRWKxiWSQ8qULbieGIzpcDF9lVcud4J8SfWyCVWGG56ly2uuWKxhudw8qUM7eeGIzpcDF9lVcud4J8SfWyqpuduepcibrlisYlncPKlC23nhiM6XAxfZKvLneCfEn1sgcud4J8SfWyyrlqp053td+bfgk6c72u/NvwSBy53gnxJ9bLVSWALc7c9dFE3XI5HRLO4gaNltvMgCW1PHg63f6QJJJJAkkkkCUqtztz1LkTdcsVjEs7h5UoW288MRnS4GL7JV5c7wT4k+tk5DHxs4b+ykFVMMNz10VtdcjkdDc7iBo2Z28yAJbU8eDrTc7c9S5E3XLFYxLO4eVKFtvPDEZ0uBi+yVeXO8E+JPrZSqww3PUuW11yxWMNzuHlShnbzwxGdLgYvsA3O3PXRRN1yOR0SzuIGjZbbzIAltTx4OtlWVVMMNz1LltdcsVjDc7h5UoZ288MRnS4GL7Kq7Fz1i54uHoVCf66eliflgoe8PqhKrDDDFdFbXoo5HQ3JIgaNmdxMgCW1PHg63VRhhueuitrrkcjobncQNGzO3mQBLanjwdblW3OwxUuRN6KxWMSySHlShbcTwxGdLgYvsqrlzvBPiT62QOnO9rvzb8EnIY+NnDf2UnbR+jvM7xDFYt/JQUUM8wdN3QdbVSQJYAsMMMV0VteijkdDckiBo2Z3EyAJbU8eDrTDDc9S5bXXLFYw3O4eVKGdvPDEZ0uBi+www3PUuW11yxWMNzuHlShnbzwxGdLgYvsCquXO8E+JPrZOnO9rvzb8EpVbnbnroom65HI6JZ3EDRstt5kAS2p48HW6qMMMMVLlteisVjDckh5UoZ3E8MRnS4GL7Ayrbnbnroom65HI6JZ3EDRstt5kAS2p48HW1V20fo7zO8QxWLfyUFFDPMHTd0HWchj42cN/ZSqphhueuitrrkcjobncQNGzO3mQBLanjwdaBuduepcibrlisYlncPKlC23nhiM6XAxfYYYbnrora65HI6G53EDRszt5kAS2p48HWyr053td+bfglVTDDDFS5bXorFYw3JIeVKGdxPDEZ0uBi+wMAZVU3OwxUuRN6KxWMSySHlShbcTwxGdLgYvsqrkMfGzhv7KVVMMNz10VtdcjkdDc7iBo2Z28yAJbU8eDrQlXsXPWLni4ehUJ/rp6WJ+WCh7w+rVTc7c9S5E3XLFYxLO4eVKFtvPDEZ0uBi+yVenO9rvzb8EnIY+NnDf2Ugyrlqp053td+bfglVTDDc9dFbXXI5HQ3O4gaNmdvMgCW1PHg63Kthhhiuitr0UcjobkkQNGzO4mQBLanjwdaBudueuiibrkcjolncQNGy23mQBLanjwdabnbnroom65HI6JZ3EDRstt5kAS2p48HWmGGGK6K2vRRyOhuSRA0bM7iZAEtqePB1uqjDDDFS5bXorFYw3JIeVKGdxPDEZ0uBi+wJV6DH3RfCf3yqphhhipctr0VisYbkkPKlDO4nhiM6XAxfZKvIY+NnDf2UqqbnYYroom9FHI6JZJEDRstuJkAS2p48HWhKvTne135t+CTkMfGzhv7KTlzvBPiT62WVcgqphhuepctrrlisYbncPKlDO3nhiM6XAxfZqo3O3PUuRN1yxWMSzuHlShbbzwxGdLgYvslXkMfGzhv7KWVcg1U6c72u/NvwSdOd7Xfm34JSq3O3PXRRN1yOR0SzuIGjZbbzIAltTx4Otqrto/R3md4hisW/koKKGeYOm7oOsFVNztz1LkTdcsVjEs7h5UoW288MRnS4GL7KqklKrDDDFS5bXorFYw3JIeVKGdxPDEZ0uBi+wKqklKrDDc9dFbXXI5HQ3O4gaNmdvMgCW1PHg62qpAkkkkCSSSQJZV8hj42cN/ZSqpuduepcibrlisYlncPKlC23nhiM6XAxfZlW3OwxUuRN6KxWMSySHlShbcTwxGdLgYvsCqugx90Xwn98pVYYbnqXLa65YrGG53DypQzt54YjOlwMX2b/Syr6c72u/NvwSBy53gnxJ9bLKuXVRLlXkCW/zc7DFdFE3oo5HRLJIgaNltxMgCW1PHg63Kthhhiuitr0UcjobkkQNGzO4mQBLanjwdbVXQY+6L4T++QOnO9rvzb8EnbR+jvM7xDFYt/JQUUM8wdN3QdaqmGGGKly2vRWKxhuSQ8qUM7ieGIzpcDF9kq9Bj7ovhP75BVTc7DFdFE3oo5HRLJIgaNltxMgCW1PHg63KthhuepctrrlisYbncPKlDO3nhiM6XAxfYbnYYqXIm9FYrGJZJDypQtuJ4YjOlwMX2aqNztz1LkTdcsVjEs7h5UoW288MRnS4GL7AwBlqpy53gnxJ9bLKuWqnIY+NnDf2UgdtH6O8zvEMVi38lBRQzzB03dB1nTne135t+CWqksAWGGGK6K2vRRyOhuSRA0bM7iZAEtqePB1oaqNztz1LkTdcsVjEs7h5UoW288MRnS4GL7Dc7DFdFE3oo5HRLJIgaNltxMgCW1PHg62Vegx90Xwn98qqYYbnrora65HI6G53EDRszt5kAS2p48HWhKvbR+jvM7xDFYt/JQUUM8wdN3QdaVWGG56ly2uuWKxhudw8qUM7eeGIzpcDF9mqjc7c9S5E3XLFYxLO4eVKFtvPDEZ0uBi+www3PXRW11yOR0NzuIGjZnbzIAltTx4OtCVenO9rvzb8EpVYYbnqXLa65YrGG53DypQzt54YjOlwMX2aqNzsMV0UTeijkdEskiBo2W3EyAJbU8eDrTc7DFdFE3oo5HRLJIgaNltxMgCW1PHg60KqlgCwwwxXRW16KOR0NySIGjZncTIAltTx4OtqroMfdF8J/fJ2LnrFzxcPQqE/109LE/LBQ94fVByGPjZw39lLKuVVMMMMV0VteijkdDckiBo2Z3EyAJbU8eDrdVGGGGKly2vRWKxhuSQ8qUM7ieGIzpcDF9gZVtztz10UTdcjkdEs7iBo2W28yAJbU8eDrdVGGGGKly2vRWKxhuSQ8qUM7ieGIzpcDF9kq9tH6O8zvEMVi38lBRQzzB03dB1qqYYYYqXLa9FYrGG5JDypQzuJ4YjOlwMX2BKvLneCfEn1snbR+jvM7xDFYt/JQUUM8wdN3QdZ20fo7zO8QxWLfyUFFDPMHTd0HWdOd7Xfm34JBKrc7DFS5E3orFYxLJIeVKFtxPDEZ0uBi+yquQx8bOG/spZVy6qJBKrDDc9dFbXXI5HQ3O4gaNmdvMgCW1PHg62VeXO8E+JPrZSqwwwxXRW16KOR0NySIGjZncTIAltTx4OtqroMfdF8J/fIKqYYYYqXLa9FYrGG5JDypQzuJ4YjOlwMX2SryGPjZw39lKqm5256lyJuuWKxiWdw8qULbeeGIzpcDF9lVSDKvpzva782/BLVSUqtzsMV0UTeijkdEskiBo2W3EyAJbU8eDraqkCSSSQJJJJAllX0GPui+E/vlVTc7DFdFE3oo5HRLJIgaNltxMgCW1PHg62VenO9rvzb8EgqphhueuitrrkcjobncQNGzO3mQBLanjwdbKvTne135t+CVVMMMMVLlteisVjDckh5UoZ3E8MRnS4GL7Mq2GG56ly2uuWKxhudw8qUM7eeGIzpcDF9gVV053td+bfglVTDDc9dFbXXI5HQ3O4gaNmdvMgCW1PHg63Ktudhipcib0VisYlkkPKlC24nhiM6XAxfZVXYuesXPFw9CoT/AF09LE/LBQ94fVBy53gnxJ9bJ20fo7zO8QxWLfyUFFDPMHTd0HWyrl1USCVW5256lyJuuWKxiWdw8qULbeeGIzpcDF9mVbDDc9S5bXXLFYw3O4eVKGdvPDEZ0uBi+yquXO8E+JPrZZVyDf5uduepcibrlisYlncPKlC23nhiM6XAxfZKvIY+NnDf2UnbR+jvM7xDFYt/JQUUM8wdN3QdZ2LnrFzxcPQqE/109LE/LBQ94fVCVW52566KJuuRyOiWdxA0bLbeZAEtqePB1tVcud4J8SfWydi56xc8XD0KhP8AXT0sT8sFD3h9XVSQZV8hj42cN/ZSyrlVTc7c9dFE3XI5HRLO4gaNltvMgCW1PHg63f6QSqwwwxUuW16KxWMNySHlShncTwxGdLgYvsNztz1LkTdcsVjEs7h5UoW288MRnS4GL7DDDDFS5bXorFYw3JIeVKGdxPDEZ0uBi+yVeQx8bOG/spBVTc7c9S5E3XLFYxLO4eVKFtvPDEZ0uBi+wwwwxUuW16KxWMNySHlShncTwxGdLgYvslXsXPWLni4ehUJ/rp6WJ+WCh7w+rVTDDDFS5bXorFYw3JIeVKGdxPDEZ0uBi+wKqklKrc7c9S5E3XLFYxLO4eVKFtvPDEZ0uBi+zKthhhiuitr0UcjobkkQNGzO4mQBLanjwdaGqjc7c9S5E3XLFYxLO4eVKFtvPDEZ0uBi+yVenO9rvzb8EnTne135t+CVVMMNz10VtdcjkdDc7iBo2Z28yAJbU8eDrQyrbnYYqXIm9FYrGJZJDypQtuJ4YjOlwMX2aqMMMMVLlteisVjDckh5UoZ3E8MRnS4GL7JV6DH3RfCf3yqphhhipctr0VisYbkkPKlDO4nhiM6XAxfYEq8ud4J8SfWydBj7ovhP75OnO9rvzb8EnTne135t+CQOxc9YueLh6FQn+unpYn5YKHvD6rto/R3md4hisW/koKKGeYOm7oOtVTDDc9dFbXXI5HQ3O4gaNmdvMgCW1PHg603OwxXRRN6KOR0SySIGjZbcTIAltTx4OtCVeXO8E+JPrZVU3O3PUuRN1yxWMSzuHlShbbzwxGdLgYvslXoMfdF8J/fJyGPjZw39lIJVYYbnqXLa65YrGG53DypQzt54YjOlwMX2VVyGPjZw39lJ053td+bfgk5c7wT4k+tkGqksAWGG56ly2uuWKxhudw8qUM7eeGIzpcDF9lVchj42cN/ZSdBj7ovhP75BVTc7DFdFE3oo5HRLJIgaNltxMgCW1PHg62qpcq8uqiQJJJJAkkkkCWALDDDFdFbXoo5HQ3JIgaNmdxMgCW1PHg63VRudhiuiib0UcjolkkQNGy24mQBLanjwdbKvTne135t+CQOQx8bOG/spOxc9YueLh6FQn+unpYn5YKHvD6roMfdF8J/fJ2LnrFzxcPQqE/109LE/LBQ94fVB2LnrFzxcPQqE/wBdPSxPywUPeH1ZVYYbnqXLa65YrGG53DypQzt54YjOlwMX2aqNztz1LkTdcsVjEs7h5UoW288MRnS4GL7JV7aP0d5neIYrFv5KCihnmDpu6DrA5DHxs4b+ylKrc7DFS5E3orFYxLJIeVKFtxPDEZ0uBi+yquxc9YueLh6FQn+unpYn5YKHvD6sqtztz10UTdcjkdEs7iBo2W28yAJbU8eDrQMMNz1LltdcsVjDc7h5UoZ288MRnS4GL7N/pZV9tH6O8zvEMVi38lBRQzzB03dB1nQY+6L4T++QSqwwwxXRW16KOR0NySIGjZncTIAltTx4OtNztz10UTdcjkdEs7iBo2W28yAJbU8eDraq7Fz1i54uHoVCf66eliflgoe8Pq1U3O3PUuRN1yxWMSzuHlShbbzwxGdLgYvsCVeQx8bOG/spOnO9rvzb8EqqYYbnrora65HI6G53EDRszt5kAS2p48HW5VtzsMVLkTeisVjEskh5UoW3E8MRnS4GL7A1UYYbnrora65HI6G53EDRszt5kAS2p48HWmGG566K2uuRyOhudxA0bM7eZAEtqePB1uVbc7c9dFE3XI5HRLO4gaNltvMgCW1PHg60wwwxXRW16KOR0NySIGjZncTIAltTx4OtCqunO9rvzb8EqqYYbnrora65HI6G53EDRszt5kAS2p48HWmGG566K2uuRyOhudxA0bM7eZAEtqePB1sq9i56xc8XD0KhP9dPSxPywUPeH1Qdi56xc8XD0KhP9dPSxPywUPeH1dVJZV8hj42cN/ZS1UkGALc7c9dFE3XI5HRLO4gaNltvMgCW1PHg62quXO8E+JPrZOxc9YueLh6FQn+unpYn5YKHvD6rto/R3md4hisW/koKKGeYOm7oOsFVMMNz10VtdcjkdDc7iBo2Z28yAJbU8eDrZV6c72u/NvwSqpuduepcibrlisYlncPKlC23nhiM6XAxfZlWwwwxXRW16KOR0NySIGjZncTIAltTx4OtCquxc9YueLh6FQn+unpYn5YKHvD6sqtztz10UTdcjkdEs7iBo2W28yAJbU8eDrdVGGG566K2uuRyOhudxA0bM7eZAEtqePB1uVbc7c9dFE3XI5HRLO4gaNltvMgCW1PHg60NVGGGGKly2vRWKxhuSQ8qUM7ieGIzpcDF9kq9i56xc8XD0KhP9dPSxPywUPeH1aqbnYYroom9FHI6JZJEDRstuJkAS2p48HWm5256lyJuuWKxiWdw8qULbeeGIzpcDF9gZVsMMMV0VteijkdDckiBo2Z3EyAJbU8eDrdVGGGGKly2vRWKxhuSQ8qUM7ieGIzpcDF9huduepcibrlisYlncPKlC23nhiM6XAxfZlWww3PUuW11yxWMNzuHlShnbzwxGdLgYvsAww3PUuW11yxWMNzuHlShnbzwxGdLgYvs1UYYYYqXLa9FYrGG5JDypQzuJ4YjOlwMX2ZVsMNz1LltdcsVjDc7h5UoZ288MRnS4GL7Kq6c72u/NvwSB2LnrFzxcPQqE/109LE/LBQ94fVcud4J8SfWydi56xc8XD0KhP8AXT0sT8sFD3h9WqmGG566K2uuRyOhudxA0bM7eZAEtqePB1oGGGGKly2vRWKxhuSQ8qUM7ieGIzpcDF9kq8hj42cN/ZSqphhhipctr0VisYbkkPKlDO4nhiM6XAxfZKvYuesXPFw9CoT/AF09LE/LBQ94fVCqmGG566K2uuRyOhudxA0bM7eZAEtqePB1tVSlVhhueuitrrkcjobncQNGzO3mQBLanjwdbVUgSSSSBJJJIJVbnYYroom9FHI6JZJEDRstuJkAS2p48HWyr20fo7zO8QxWLfyUFFDPMHTd0HWqpuduepcibrlisYlncPKlC23nhiM6XAxfZKvTne135t+CQSq3OwxUuRN6KxWMSySHlShbcTwxGdLgYvsMMNz1LltdcsVjDc7h5UoZ288MRnS4GL7Dc7c9dFE3XI5HRLO4gaNltvMgCW1PHg63VRuduepcibrlisYlncPKlC23nhiM6XAxfYGVbc7c9dFE3XI5HRLO4gaNltvMgCW1PHg603OwxUuRN6KxWMSySHlShbcTwxGdLgYvsqrlzvBPiT62Wqkg5V5aqdOd7Xfm34JSq3O3PXRRN1yOR0SzuIGjZbbzIAltTx4Ot3+kEqsMNz10VtdcjkdDc7iBo2Z28yAJbU8eDrZV7Fz1i54uHoVCf66eliflgoe8Pqyq3OwxUuRN6KxWMSySHlShbcTwxGdLgYvslWQVUww3PUuW11yxWMNzuHlShnbzwxGdLgYvslWVVMMMMV0VteijkdDckiBo2Z3EyAJbU8eDraq5c7wT4k+tkGVcqqYYbnqXLa65YrGG53DypQzt54YjOlwMX2G52GKlyJvRWKxiWSQ8qULbieGIzpcDF9mqjc7c9S5E3XLFYxLO4eVKFtvPDEZ0uBi+wMq2GG56ly2uuWKxhudw8qUM7eeGIzpcDF9lVdtH6O8zvEMVi38lBRQzzB03dB1nLneCfEn1spVYYbnqXLa65YrGG53DypQzt54YjOlwMX2Bqo3OwxXRRN6KOR0SySIGjZbcTIAltTx4OtwBlqpy53gnxJ9bKVWGGGK6K2vRRyOhuSRA0bM7iZAEtqePB1ob/Syr6c72u/NvwSlVudueuiibrkcjolncQNGy23mQBLanjwdabnYYqXIm9FYrGJZJDypQtuJ4YjOlwMX2Bqoww3PXRW11yOR0NzuIGjZnbzIAltTx4OtMMMMVLlteisVjDckh5UoZ3E8MRnS4GL7Mq252GKlyJvRWKxiWSQ8qULbieGIzpcDF9lVdOd7Xfm34JA5c7wT4k+tlKrc7c9dFE3XI5HRLO4gaNltvMgCW1PHg603OwxUuRN6KxWMSySHlShbcTwxGdLgYvs1UbnbnqXIm65YrGJZ3DypQtt54YjOlwMX2BgDKqmGG56ly2uuWKxhudw8qUM7eeGIzpcDF9lVcud4J8SfWychj42cN/ZSCVWGG56ly2uuWKxhudw8qUM7eeGIzpcDF9hudueuiibrkcjolncQNGy23mQBLanjwdbVXLneCfEn1sqqbnbnqXIm65YrGJZ3DypQtt54YjOlwMX2BKvTne135t+CVVMMMMVLlteisVjDckh5UoZ3E8MRnS4GL7JV5DHxs4b+yk6c72u/NvwSB2LnrFzxcPQqE/wBdPSxPywUPeH1aqYYYYqXLa9FYrGG5JDypQzuJ4YjOlwMX2VVLKvlzvBPiT62QOxc9YueLh6FQn+unpYn5YKHvD6sqtztz10UTdcjkdEs7iBo2W28yAJbU8eDrTc7DFS5E3orFYxLJIeVKFtxPDEZ0uBi+zVRuduepcibrlisYlncPKlC23nhiM6XAxfYGVbDDc9S5bXXLFYw3O4eVKGdvPDEZ0uBi+yquXO8E+JPrZOXO8E+JPrZOxc9YueLh6FQn+unpYn5YKHvD6oVU3OwxXRRN6KOR0SySIGjZbcTIAltTx4OtqqWALDDDFdFbXoo5HQ3JIgaNmdxMgCW1PHg63f6QJJJJAkkkkEqtzsMV0UTeijkdEskiBo2W3EyAJbU8eDrTc7DFdFE3oo5HRLJIgaNltxMgCW1PHg62VeXO8E+JPrZO2j9HeZ3iGKxb+SgooZ5g6bug6wOXO8E+JPrZOnO9rvzb8Esq5VUww3PUuW11yxWMNzuHlShnbzwxGdLgYvsA3O3PXRRN1yOR0SzuIGjZbbzIAltTx4OtqrlzvBPiT62UqtzsMVLkTeisVjEskh5UoW3E8MRnS4GL7JVkGqnYuesXPFw9CoT/AF09LE/LBQ94fVlVudueuiibrkcjolncQNGy23mQBLanjwdbVXQY+6L4T++UqsMMMV0VteijkdDckiBo2Z3EyAJbU8eDrQMMNz1LltdcsVjDc7h5UoZ288MRnS4GL7NVG52GK6KJvRRyOiWSRA0bLbiZAEtqePB1tVSyr7aP0d5neIYrFv5KCihnmDpu6DrBKrDDDFdFbXoo5HQ3JIgaNmdxMgCW1PHg62quXO8E+JPrZVUwwwxUuW16KxWMNySHlShncTwxGdLgYvslXsXPWLni4ehUJ/rp6WJ+WCh7w+qEqtztz10UTdcjkdEs7iBo2W28yAJbU8eDraq6c72u/NvwSdtH6O8zvEMVi38lBRQzzB03dB1nQY+6L4T++QSq3O3PXRRN1yOR0SzuIGjZbbzIAltTx4OtqrsXPWLni4ehUJ/rp6WJ+WCh7w+rVTDDc9dFbXXI5HQ3O4gaNmdvMgCW1PHg60ww3PXRW11yOR0NzuIGjZnbzIAltTx4OtCVeXO8E+JPrZZVyqphhhiuitr0UcjobkkQNGzO4mQBLanjwdbVXTne135t+CQZVy1U5c7wT4k+tk7aP0d5neIYrFv5KCihnmDpu6DrSqwwwxXRW16KOR0NySIGjZncTIAltTx4OtCqu2j9HeZ3iGKxb+SgooZ5g6bug6zto/R3md4hisW/koKKGeYOm7oOtVTc7DFdFE3oo5HRLJIgaNltxMgCW1PHg60wwwxUuW16KxWMNySHlShncTwxGdLgYvsDKtudueuiibrkcjolncQNGy23mQBLanjwdbVXTne135t+CUqtzsMVLkTeisVjEskh5UoW3E8MRnS4GL7NVG5256lyJuuWKxiWdw8qULbeeGIzpcDF9gZVtztz10UTdcjkdEs7iBo2W28yAJbU8eDraq5c7wT4k+tlVTDDDFS5bXorFYw3JIeVKGdxPDEZ0uBi+zAGQb/Nztz1LkTdcsVjEs7h5UoW288MRnS4GL7JV6c72u/NvwSqphhueuitrrkcjobncQNGzO3mQBLanjwdbKvTne135t+CQSq3OwxUuRN6KxWMSySHlShbcTwxGdLgYvsqrkMfGzhv7KTto/R3md4hisW/koKKGeYOm7oOtqpIMAWGGGK6K2vRRyOhuSRA0bM7iZAEtqePB1uqjc7c9S5E3XLFYxLO4eVKFtvPDEZ0uBi+w3O3PUuRN1yxWMSzuHlShbbzwxGdLgYvslXkMfGzhv7KQZVy1U6c72u/NvwSdi56xc8XD0KhP9dPSxPywUPeH1ZVYYYYrora9FHI6G5JEDRszuJkAS2p48HWgbnbnroom65HI6JZ3EDRstt5kAS2p48HW7/SlVhhhipctr0VisYbkkPKlDO4nhiM6XAxfZlWww3PUuW11yxWMNzuHlShnbzwxGdLgYvsCquQx8bOG/spaqSwBbnbnroom65HI6JZ3EDRstt5kAS2p48HW7/SBJJJIEkkkgSyr5DHxs4b+yk5c7wT4k+tk6DH3RfCf3yDVSWVfTne135t+CToMfdF8J/fJ2LnrFzxcPQqE/109LE/LBQ94fVCVW52566KJuuRyOiWdxA0bLbeZAEtqePB1phhhiuitr0UcjobkkQNGzO4mQBLanjwdbVXbR+jvM7xDFYt/JQUUM8wdN3QdaVW52566KJuuRyOiWdxA0bLbeZAEtqePB1oaqMMNz10VtdcjkdDc7iBo2Z28yAJbU8eDrcq2GGGK6K2vRRyOhuSRA0bM7iZAEtqePB1uqjDDc9dFbXXI5HQ3O4gaNmdvMgCW1PHg62Vegx90Xwn98gqpudhiuiib0UcjolkkQNGy24mQBLanjwdblWww3PUuW11yxWMNzuHlShnbzwxGdLgYvsNztz10UTdcjkdEs7iBo2W28yAJbU8eDrd/pBKrDDDFS5bXorFYw3JIeVKGdxPDEZ0uBi+wwwwxUuW16KxWMNySHlShncTwxGdLgYvslXoMfdF8J/fJ2LnrFzxcPQqE/109LE/LBQ94fVCqm5256lyJuuWKxiWdw8qULbeeGIzpcDF9huduepcibrlisYlncPKlC23nhiM6XAxfZlWwwwxXRW16KOR0NySIGjZncTIAltTx4Ot3+kGALc7c9dFE3XI5HRLO4gaNltvMgCW1PHg63VRhhhipctr0VisYbkkPKlDO4nhiM6XAxfZKvYuesXPFw9CoT/XT0sT8sFD3h9V0GPui+E/vkEqtzsMVLkTeisVjEskh5UoW3E8MRnS4GL7Dc7c9dFE3XI5HRLO4gaNltvMgCW1PHg63f6WVfIY+NnDf2UglVudhipcib0VisYlkkPKlC24nhiM6XAxfZqo3O3PUuRN1yxWMSzuHlShbbzwxGdLgYvslXsXPWLni4ehUJ/rp6WJ+WCh7w+q7aP0d5neIYrFv5KCihnmDpu6DrBKrc7c9dFE3XI5HRLO4gaNltvMgCW1PHg63VRudhiuiib0UcjolkkQNGy24mQBLanjwdabnYYroom9FHI6JZJEDRstuJkAS2p48HW4AyCqm52566KJuuRyOiWdxA0bLbeZAEtqePB1phhhiuitr0UcjobkkQNGzO4mQBLanjwdbVXTne135t+CTkMfGzhv7KQOnO9rvzb8EqqbnYYroom9FHI6JZJEDRstuJkAS2p48HW4Ay3+YYbnrora65HI6G53EDRszt5kAS2p48HWhKvYuesXPFw9CoT/AF09LE/LBQ94fV1UlKrDDDFS5bXorFYw3JIeVKGdxPDEZ0uBi+w3OwxXRRN6KOR0SySIGjZbcTIAltTx4OtDKtudhipcib0VisYlkkPKlC24nhiM6XAxfZv9LKvoMfdF8J/fJyGPjZw39lIJVbnYYqXIm9FYrGJZJDypQtuJ4YjOlwMX2aqNzsMV0UTeijkdEskiBo2W3EyAJbU8eDrZV5c7wT4k+tk6c72u/NvwSDVSXKvKqmGG56ly2uuWKxhudw8qUM7eeGIzpcDF9lVdtH6O8zvEMVi38lBRQzzB03dB1gqphhueuitrrkcjobncQNGzO3mQBLanjwdbgDLf5uduepcibrlisYlncPKlC23nhiM6XAxfZKvTne135t+CQO2j9HeZ3iGKxb+SgooZ5g6bug62qksAW52GKlyJvRWKxiWSQ8qULbieGIzpcDF9m/0gSSSSBJJJIEpVYYYYqXLa9FYrGG5JDypQzuJ4YjOlwMX2Sry53gnxJ9bKqm5256lyJuuWKxiWdw8qULbeeGIzpcDF9gZVsMMMV0VteijkdDckiBo2Z3EyAJbU8eDrdVG5256lyJuuWKxiWdw8qULbeeGIzpcDF9huduepcibrlisYlncPKlC23nhiM6XAxfZKvTne135t+CQOgx90Xwn98qqbnYYroom9FHI6JZJEDRstuJkAS2p48HW1VKVWGGGKly2vRWKxhuSQ8qUM7ieGIzpcDF9gSr053td+bfglKrDDDFdFbXoo5HQ3JIgaNmdxMgCW1PHg62qu2j9HeZ3iGKxb+SgooZ5g6bug61VMMNz10VtdcjkdDc7iBo2Z28yAJbU8eDrQqqXKvKqmGGGK6K2vRRyOhuSRA0bM7iZAEtqePB1phhuepctrrlisYbncPKlDO3nhiM6XAxfYEqy1U5c7wT4k+tlqpLKvoMfdF8J/fIKqYYbnrora65HI6G53EDRszt5kAS2p48HWmGGGKly2vRWKxhuSQ8qUM7ieGIzpcDF9mVbc7c9dFE3XI5HRLO4gaNltvMgCW1PHg62VZBqp2LnrFzxcPQqE/wBdPSxPywUPeH1XbR+jvM7xDFYt/JQUUM8wdN3QdZ0GPui+E/vlKrc7c9dFE3XI5HRLO4gaNltvMgCW1PHg60Kq6DH3RfCf3ycud4J8SfWyqpudhiuiib0UcjolkkQNGy24mQBLanjwdbKvYuesXPFw9CoT/XT0sT8sFD3h9UJVYYbnqXLa65YrGG53DypQzt54YjOlwMX2VVy53gnxJ9bKqm5256lyJuuWKxiWdw8qULbeeGIzpcDF9kq9tH6O8zvEMVi38lBRQzzB03dB1gchj42cN/ZS1UllXyGPjZw39lKqmGG566K2uuRyOhudxA0bM7eZAEtqePB1oSry53gnxJ9bKqmGGGKly2vRWKxhuSQ8qUM7ieGIzpcDF9hhhueuitrrkcjobncQNGzO3mQBLanjwdblWwwwxXRW16KOR0NySIGjZncTIAltTx4OtCquQx8bOG/spSqwwwxXRW16KOR0NySIGjZncTIAltTx4Ot3+lKrc7DFdFE3oo5HRLJIgaNltxMgCW1PHg60JV5DHxs4b+ylVTc7c9S5E3XLFYxLO4eVKFtvPDEZ0uBi+wwwwxUuW16KxWMNySHlShncTwxGdLgYvswBkFVMMNz1LltdcsVjDc7h5UoZ288MRnS4GL7Kq7aP0d5neIYrFv5KCihnmDpu6DrOQx8bOG/spOnO9rvzb8Egdi56xc8XD0KhP9dPSxPywUPeH1ZVYYbnqXLa65YrGG53DypQzt54YjOlwMX2b/Syr5c7wT4k+tkFVNztz1LkTdcsVjEs7h5UoW288MRnS4GL7KqlKrc7DFdFE3oo5HRLJIgaNltxMgCW1PHg60ww3PXRW11yOR0NzuIGjZnbzIAltTx4OtCVegx90Xwn98tVJZV8ud4J8SfWyqpuduepcibrlisYlncPKlC23nhiM6XAxfYGVbc7DFS5E3orFYxLJIeVKFtxPDEZ0uBi+zf6UqtzsMV0UTeijkdEskiBo2W3EyAJbU8eDraqkCSSSQJJJJAlKrc7DFdFE3oo5HRLJIgaNltxMgCW1PHg62qpZV9Bj7ovhP75A7aP0d5neIYrFv5KCihnmDpu6DrOxc9YueLh6FQn+unpYn5YKHvD6uqksAWGG56ly2uuWKxhudw8qUM7eeGIzpcDF9gaqMMMMVLlteisVjDckh5UoZ3E8MRnS4GL7JV5DHxs4b+yk5c7wT4k+tlVTc7c9S5E3XLFYxLO4eVKFtvPDEZ0uBi+wJV5DHxs4b+yk5c7wT4k+tlKrDDc9S5bXXLFYw3O4eVKGdvPDEZ0uBi+yquxc9YueLh6FQn+unpYn5YKHvD6oOQx8bOG/spSqwwwxXRW16KOR0NySIGjZncTIAltTx4OtqrsXPWLni4ehUJ/rp6WJ+WCh7w+rVTDDDFS5bXorFYw3JIeVKGdxPDEZ0uBi+wDc7DFdFE3oo5HRLJIgaNltxMgCW1PHg603O3PUuRN1yxWMSzuHlShbbzwxGdLgYvsMMMMVLlteisVjDckh5UoZ3E8MRnS4GL7KqkGVfQY+6L4T++VVMMNz10VtdcjkdDc7iBo2Z28yAJbU8eDrTDDDFS5bXorFYw3JIeVKGdxPDEZ0uBi+yVe2j9HeZ3iGKxb+SgooZ5g6bug6wSq3OwxUuRN6KxWMSySHlShbcTwxGdLgYvsqrlzvBPiT62Tto/R3md4hisW/koKKGeYOm7oOs5DHxs4b+ykFVNztz1LkTdcsVjEs7h5UoW288MRnS4GL7DDDDFS5bXorFYw3JIeVKGdxPDEZ0uBi+yVeXO8E+JPrZOnO9rvzb8EglVudhipcib0VisYlkkPKlC24nhiM6XAxfZqoww3PXRW11yOR0NzuIGjZnbzIAltTx4OtyrYYYYrora9FHI6G5JEDRszuJkAS2p48HWm52GKlyJvRWKxiWSQ8qULbieGIzpcDF9gVV20fo7zO8QxWLfyUFFDPMHTd0HWdBj7ovhP75VU3O3PUuRN1yxWMSzuHlShbbzwxGdLgYvsyrYYYYrora9FHI6G5JEDRszuJkAS2p48HWgbnbnroom65HI6JZ3EDRstt5kAS2p48HW1Vy53gnxJ9bKVWGGGK6K2vRRyOhuSRA0bM7iZAEtqePB1phhuepctrrlisYbncPKlDO3nhiM6XAxfYEqy3+YYYYqXLa9FYrGG5JDypQzuJ4YjOlwMX2G52GK6KJvRRyOiWSRA0bLbiZAEtqePB1uAMgqphhhiuitr0UcjobkkQNGzO4mQBLanjwdaYYYYrora9FHI6G5JEDRszuJkAS2p48HW1V20fo7zO8QxWLfyUFFDPMHTd0HWdOd7Xfm34JA7Fz1i54uHoVCf66eliflgoe8Pq1Uww3PXRW11yOR0NzuIGjZnbzIAltTx4OtMMMMVLlteisVjDckh5UoZ3E8MRnS4GL7Dc7DFdFE3oo5HRLJIgaNltxMgCW1PHg60Mq252566KJuuRyOiWdxA0bLbeZAEtqePB1tVchj42cN/ZSlVhhuepctrrlisYbncPKlDO3nhiM6XAxfZKsg6qJcq8qqbnbnroom65HI6JZ3EDRstt5kAS2p48HW7/SCVW52GK6KJvRRyOiWSRA0bLbiZAEtqePB1sq9i56xc8XD0KhP9dPSxPywUPeH1XbR+jvM7xDFYt/JQUUM8wdN3QdZ053td+bfgkFVMMNz10VtdcjkdDc7iBo2Z28yAJbU8eDraqllXy53gnxJ9bLVSQJJJJAkkkkEqtztz1LkTdcsVjEs7h5UoW288MRnS4GL7Mq2GGGK6K2vRRyOhuSRA0bM7iZAEtqePB1uqjc7c9S5E3XLFYxLO4eVKFtvPDEZ0uBi+wwwwxUuW16KxWMNySHlShncTwxGdLgYvsDKthhuepctrrlisYbncPKlDO3nhiM6XAxfZVXTne135t+CUqtzsMVLkTeisVjEskh5UoW3E8MRnS4GL7NVG5256lyJuuWKxiWdw8qULbeeGIzpcDF9gZVtztz10UTdcjkdEs7iBo2W28yAJbU8eDrTc7c9dFE3XI5HRLO4gaNltvMgCW1PHg62quXO8E+JPrZOQx8bOG/spBKrDDc9S5bXXLFYw3O4eVKGdvPDEZ0uBi+yquXO8E+JPrZVU3O3PUuRN1yxWMSzuHlShbbzwxGdLgYvsNzsMV0UTeijkdEskiBo2W3EyAJbU8eDrQlXkMfGzhv7KTlzvBPiT62WqkkgwBbnbnroom65HI6JZ3EDRstt5kAS2p48HWmGG56ly2uuWKxhudw8qUM7eeGIzpcDF9hhhhiuitr0UcjobkkQNGzO4mQBLanjwdbVXLneCfEn1sglVhhuepctrrlisYbncPKlDO3nhiM6XAxfYYYbnqXLa65YrGG53DypQzt54YjOlwMX2SrLf5uduepcibrlisYlncPKlC23nhiM6XAxfYGVbDDc9S5bXXLFYw3O4eVKGdvPDEZ0uBi+yquQx8bOG/spOXO8E+JPrZOgx90Xwn98gdBj7ovhP75VUwwwxUuW16KxWMNySHlShncTwxGdLgYvsMMNz10VtdcjkdDc7iBo2Z28yAJbU8eDrcq252GKlyJvRWKxiWSQ8qULbieGIzpcDF9gaqNztz1LkTdcsVjEs7h5UoW288MRnS4GL7JV7aP0d5neIYrFv5KCihnmDpu6DrOnO9rvzb8EpVYYbnqXLa65YrGG53DypQzt54YjOlwMX2Abnbnroom65HI6JZ3EDRstt5kAS2p48HW6qNztz1LkTdcsVjEs7h5UoW288MRnS4GL7JV6DH3RfCf3ydtH6O8zvEMVi38lBRQzzB03dB1gdOd7Xfm34JSq3O3PXRRN1yOR0SzuIGjZbbzIAltTx4OtNzsMVLkTeisVjEskh5UoW3E8MRnS4GL7NVG5256lyJuuWKxiWdw8qULbeeGIzpcDF9gZVtztz10UTdcjkdEs7iBo2W28yAJbU8eDrTc7c9dFE3XI5HRLO4gaNltvMgCW1PHg62quXO8E+JPrZSq3O3PXRRN1yOR0SzuIGjZbbzIAltTx4OtCqugx90Xwn98qqYYYYqXLa9FYrGG5JDypQzuJ4YjOlwMX2ZVsMMMV0VteijkdDckiBo2Z3EyAJbU8eDrdVG52GK6KJvRRyOiWSRA0bLbiZAEtqePB1oSryGPjZw39lKqm5256lyJuuWKxiWdw8qULbeeGIzpcDF9hhhhipctr0VisYbkkPKlDO4nhiM6XAxfZKvLneCfEn1sgcud4J8SfWyqphhueuitrrkcjobncQNGzO3mQBLanjwdbKvbR+jvM7xDFYt/JQUUM8wdN3QdaVW52566KJuuRyOiWdxA0bLbeZAEtqePB1oVV053td+bfglKrDDc9S5bXXLFYw3O4eVKGdvPDEZ0uBi+w3OwxUuRN6KxWMSySHlShbcTwxGdLgYvs1UbnbnqXIm65YrGJZ3DypQtt54YjOlwMX2BKvTne135t+CWqksq+XO8E+JPrZOnO9rvzb8EglVudhipcib0VisYlkkPKlC24nhiM6XAxfZv8ASwBbnYYqXIm9FYrGJZJDypQtuJ4YjOlwMX2b/SBJJJIEkkkgyr5c7wT4k+tlKrDDc9S5bXXLFYw3O4eVKGdvPDEZ0uBi+zVRuduepcibrlisYlncPKlC23nhiM6XAxfZlW3O3PXRRN1yOR0SzuIGjZbbzIAltTx4OtA3O3PXRRN1yOR0SzuIGjZbbzIAltTx4Otqrpzva782/BLKuW/zc7c9S5E3XLFYxLO4eVKFtvPDEZ0uBi+wMq252566KJuuRyOiWdxA0bLbeZAEtqePB1u/0uVeXVRIMq+xc9YueLh6FQn+unpYn5YKHvD6rlzvBPiT62Tpzva782/BKqmGG566K2uuRyOhudxA0bM7eZAEtqePB1oYAy3+YYbnrora65HI6G53EDRszt5kAS2p48HWyr2LnrFzxcPQqE/109LE/LBQ94fVqphhhipctr0VisYbkkPKlDO4nhiM6XAxfYBhhueuitrrkcjobncQNGzO3mQBLanjwdbKvYuesXPFw9CoT/XT0sT8sFD3h9V0GPui+E/vlKrDDc9S5bXXLFYw3O4eVKGdvPDEZ0uBi+wJVlqp053td+bfglVTDDDFS5bXorFYw3JIeVKGdxPDEZ0uBi+zKthhhiuitr0UcjobkkQNGzO4mQBLanjwdaBudueuiibrkcjolncQNGy23mQBLanjwdaYYbnqXLa65YrGG53DypQzt54YjOlwMX2b/Syr7aP0d5neIYrFv5KCihnmDpu6DrA5c7wT4k+tk6DH3RfCf3yqpuduepcibrlisYlncPKlC23nhiM6XAxfZKvbR+jvM7xDFYt/JQUUM8wdN3QdYHbR+jvM7xDFYt/JQUUM8wdN3QdZ0GPui+E/vlKrc7c9dFE3XI5HRLO4gaNltvMgCW1PHg603OwxUuRN6KxWMSySHlShbcTwxGdLgYvsDVRudhiuiib0UcjolkkQNGy24mQBLanjwdbKvTne135t+CVVMMNz10VtdcjkdDc7iBo2Z28yAJbU8eDraqkGALc7DFS5E3orFYxLJIeVKFtxPDEZ0uBi+yqunO9rvzb8EpVbnbnroom65HI6JZ3EDRstt5kAS2p48HWmGG56ly2uuWKxhudw8qUM7eeGIzpcDF9gG52566KJuuRyOiWdxA0bLbeZAEtqePB1phhhiuitr0UcjobkkQNGzO4mQBLanjwdbKst/m5256lyJuuWKxiWdw8qULbeeGIzpcDF9gZVsMMMV0VteijkdDckiBo2Z3EyAJbU8eDrdVG5256lyJuuWKxiWdw8qULbeeGIzpcDF9hhhhipctr0VisYbkkPKlDO4nhiM6XAxfZKvIY+NnDf2Ug1UlKrc7c9S5E3XLFYxLO4eVKFtvPDEZ0uBi+zKthhhiuitr0UcjobkkQNGzO4mQBLanjwdbVXQY+6L4T++QVU3O3PUuRN1yxWMSzuHlShbbzwxGdLgYvsyrbnYYqXIm9FYrGJZJDypQtuJ4YjOlwMX2SrKqm52566KJuuRyOiWdxA0bLbeZAEtqePB1oG52566KJuuRyOiWdxA0bLbeZAEtqePB1tVdOd7Xfm34JOxc9YueLh6FQn+unpYn5YKHvD6roMfdF8J/fIJVbnbnroom65HI6JZ3EDRstt5kAS2p48HW7/AEuVeVVMMNz1LltdcsVjDc7h5UoZ288MRnS4GL7A1UYYYYqXLa9FYrGG5JDypQzuJ4YjOlwMX2VVKVW5256lyJuuWKxiWdw8qULbeeGIzpcDF9lVSBJJJIEkkkglVudhiuiib0UcjolkkQNGy24mQBLanjwdbKvQY+6L4T++VVNztz1LkTdcsVjEs7h5UoW288MRnS4GL7JV6c72u/NvwSCqmGG566K2uuRyOhudxA0bM7eZAEtqePB1puduepcibrlisYlncPKlC23nhiM6XAxfZlWwwwxXRW16KOR0NySIGjZncTIAltTx4Otqrpzva782/BIKqYYYYqXLa9FYrGG5JDypQzuJ4YjOlwMX2ZVtzsMVLkTeisVjEskh5UoW3E8MRnS4GL7Dc7c9dFE3XI5HRLO4gaNltvMgCW1PHg62quXO8E+JPrZBqpKVW5256lyJuuWKxiWdw8qULbeeGIzpcDF9mVbc7DFS5E3orFYxLJIeVKFtxPDEZ0uBi+yquXO8E+JPrZBKrc7c9dFE3XI5HRLO4gaNltvMgCW1PHg62qu2j9HeZ3iGKxb+SgooZ5g6bug60qsMMMV0VteijkdDckiBo2Z3EyAJbU8eDrdVGGG566K2uuRyOhudxA0bM7eZAEtqePB1oSr2LnrFzxcPQqE/109LE/LBQ94fV1UllXy53gnxJ9bLVSQYAtzsMVLkTeisVjEskh5UoW3E8MRnS4GL7Kq7aP0d5neIYrFv5KCihnmDpu6DrOXO8E+JPrZaqSDKvkMfGzhv7KVVMMNz10VtdcjkdDc7iBo2Z28yAJbU8eDrZV6DH3RfCf3yqphhueuitrrkcjobncQNGzO3mQBLanjwdaBuduepcibrlisYlncPKlC23nhiM6XAxfZKvYuesXPFw9CoT/XT0sT8sFD3h9WVWGGGK6K2vRRyOhuSRA0bM7iZAEtqePB1uqjc7DFdFE3oo5HRLJIgaNltxMgCW1PHg60Dc7DFdFE3oo5HRLJIgaNltxMgCW1PHg63KtudueuiibrkcjolncQNGy23mQBLanjwdbVXQY+6L4T++ToMfdF8J/fIKqYYYYqXLa9FYrGG5JDypQzuJ4YjOlwMX2ZVsMMMV0VteijkdDckiBo2Z3EyAJbU8eDrd/pZV9tH6O8zvEMVi38lBRQzzB03dB1gqphhhipctr0VisYbkkPKlDO4nhiM6XAxfZKvLneCfEn1sqqYYbnrora65HI6G53EDRszt5kAS2p48HW5VtzsMVLkTeisVjEskh5UoW3E8MRnS4GL7Aqrto/R3md4hisW/koKKGeYOm7oOs5DHxs4b+ylVTc7c9S5E3XLFYxLO4eVKFtvPDEZ0uBi+w3O3PUuRN1yxWMSzuHlShbbzwxGdLgYvsDKthhhiuitr0UcjobkkQNGzO4mQBLanjwdbKsqqbnbnroom65HI6JZ3EDRstt5kAS2p48HW6qMMNz10VtdcjkdDc7iBo2Z28yAJbU8eDrQlXsXPWLni4ehUJ/rp6WJ+WCh7w+q5c7wT4k+tlqpLAFudueuiibrkcjolncQNGy23mQBLanjwdaBhhhiuitr0UcjobkkQNGzO4mQBLanjwdaYYbnqXLa65YrGG53DypQzt54YjOlwMX2VV2LnrFzxcPQqE/109LE/LBQ94fVchj42cN/ZSB053td+bfgk6DH3RfCf3ychj42cN/ZScud4J8SfWyB0GPui+E/vk7Fz1i54uHoVCf66eliflgoe8Pqyqww3PUuW11yxWMNzuHlShnbzwxGdLgYvsqroMfdF8J/fIKqYYYYqXLa9FYrGG5JDypQzuJ4YjOlwMX2VVLlXl1USBJJJIEkkkglVuduepcibrlisYlncPKlC23nhiM6XAxfYYYbnrora65HI6G53EDRszt5kAS2p48HWm52GK6KJvRRyOiWSRA0bLbiZAEtqePB1uVbc7DFS5E3orFYxLJIeVKFtxPDEZ0uBi+wKq7aP0d5neIYrFv5KCihnmDpu6DrOxc9YueLh6FQn+unpYn5YKHvD6rkMfGzhv7KVVNztz1LkTdcsVjEs7h5UoW288MRnS4GL7AlXsXPWLni4ehUJ/rp6WJ+WCh7w+rVTc7c9S5E3XLFYxLO4eVKFtvPDEZ0uBi+wwwwxUuW16KxWMNySHlShncTwxGdLgYvslXoMfdF8J/fINVJSq3OwxXRRN6KOR0SySIGjZbcTIAltTx4OtMMMMVLlteisVjDckh5UoZ3E8MRnS4GL7Mq252566KJuuRyOiWdxA0bLbeZAEtqePB1oaqMMMMVLlteisVjDckh5UoZ3E8MRnS4GL7Mq2GGGK6K2vRRyOhuSRA0bM7iZAEtqePB1uqjc7c9S5E3XLFYxLO4eVKFtvPDEZ0uBi+yVeQx8bOG/spBKrc7DFS5E3orFYxLJIeVKFtxPDEZ0uBi+yqu2j9HeZ3iGKxb+SgooZ5g6bug61VMMNz10VtdcjkdDc7iBo2Z28yAJbU8eDrcq2GGGK6K2vRRyOhuSRA0bM7iZAEtqePB1oGGG56ly2uuWKxhudw8qUM7eeGIzpcDF9hhhhiuitr0UcjobkkQNGzO4mQBLanjwdbqowwwxUuW16KxWMNySHlShncTwxGdLgYvsMMMMVLlteisVjDckh5UoZ3E8MRnS4GL7ANztz1LkTdcsVjEs7h5UoW288MRnS4GL7JV7Fz1i54uHoVCf66eliflgoe8Pq6qSSCVW5256lyJuuWKxiWdw8qULbeeGIzpcDF9kq9Od7Xfm34JOXO8E+JPrZSq3O3PXRRN1yOR0SzuIGjZbbzIAltTx4OtCquQx8bOG/spSqwwwxXRW16KOR0NySIGjZncTIAltTx4Ot3+lKrDDc9dFbXXI5HQ3O4gaNmdvMgCW1PHg60JV6c72u/NvwSdBj7ovhP75ZVySDqollXy53gnxJ9bJyGPjZw39lJ2LnrFzxcPQqE/109LE/LBQ94fVB053td+bfgllXLVTpzva782/BKqm5256lyJuuWKxiWdw8qULbeeGIzpcDF9gGGG566K2uuRyOhudxA0bM7eZAEtqePB1sq9Od7Xfm34JVU3OwxXRRN6KOR0SySIGjZbcTIAltTx4OtlXlzvBPiT62QSqwwwxXRW16KOR0NySIGjZncTIAltTx4Ot1UYYbnrora65HI6G53EDRszt5kAS2p48HWm5256lyJuuWKxiWdw8qULbeeGIzpcDF9kq8ud4J8SfWyCqm52GK6KJvRRyOiWSRA0bLbiZAEtqePB1uVbc7c9dFE3XI5HRLO4gaNltvMgCW1PHg63VRudhiuiib0UcjolkkQNGy24mQBLanjwdblW3O3PXRRN1yOR0SzuIGjZbbzIAltTx4OtDVRhhhipctr0VisYbkkPKlDO4nhiM6XAxfZKvTne135t+CWqksAWGGGK6K2vRRyOhuSRA0bM7iZAEtqePB1oG52566KJuuRyOiWdxA0bLbeZAEtqePB1tVchj42cN/ZSqphhhipctr0VisYbkkPKlDO4nhiM6XAxfYYYYYqXLa9FYrGG5JDypQzuJ4YjOlwMX2BgDLqollXyGPjZw39lLVSQJJJJAkkkkEqtztz1LkTdcsVjEs7h5UoW288MRnS4GL7JV5DHxs4b+ylVTc7c9S5E3XLFYxLO4eVKFtvPDEZ0uBi+yVe2j9HeZ3iGKxb+SgooZ5g6bug6wSqwwwxXRW16KOR0NySIGjZncTIAltTx4Otqrpzva782/BKqmGG566K2uuRyOhudxA0bM7eZAEtqePB1uVbDDc9S5bXXLFYw3O4eVKGdvPDEZ0uBi+wN/pSq3O3PUuRN1yxWMSzuHlShbbzwxGdLgYvslXkMfGzhv7KUqtzsMVLkTeisVjEskh5UoW3E8MRnS4GL7A1UbnYYroom9FHI6JZJEDRstuJkAS2p48HWmGG566K2uuRyOhudxA0bM7eZAEtqePB1phhueuitrrkcjobncQNGzO3mQBLanjwdbKvQY+6L4T++QZVy3+bnbnqXIm65YrGJZ3DypQtt54YjOlwMX2SryGPjZw39lKVW52GKlyJvRWKxiWSQ8qULbieGIzpcDF9gaqMMMMVLlteisVjDckh5UoZ3E8MRnS4GL7JV5DHxs4b+ylVTc7DFdFE3oo5HRLJIgaNltxMgCW1PHg63KtudueuiibrkcjolncQNGy23mQBLanjwdaFVdOd7Xfm34JOnO9rvzb8EqqYYYYqXLa9FYrGG5JDypQzuJ4YjOlwMX2GGG566K2uuRyOhudxA0bM7eZAEtqePB1oSr053td+bfglVTDDc9dFbXXI5HQ3O4gaNmdvMgCW1PHg62VenO9rvzb8EnQY+6L4T++QO2j9HeZ3iGKxb+SgooZ5g6bug62VctVOxc9YueLh6FQn+unpYn5YKHvD6sqsMMMV0VteijkdDckiBo2Z3EyAJbU8eDrQ1UYYbnrora65HI6G53EDRszt5kAS2p48HW5VtzsMVLkTeisVjEskh5UoW3E8MRnS4GL7NVGGGGKly2vRWKxhuSQ8qUM7ieGIzpcDF9mVbDDc9S5bXXLFYw3O4eVKGdvPDEZ0uBi+wJVlqpy53gnxJ9bKVWGG56ly2uuWKxhudw8qUM7eeGIzpcDF9hudueuiibrkcjolncQNGy23mQBLanjwdaBudueuiibrkcjolncQNGy23mQBLanjwdbqo3O3PUuRN1yxWMSzuHlShbbzwxGdLgYvsyrbnYYqXIm9FYrGJZJDypQtuJ4YjOlwMX2VV2LnrFzxcPQqE/wBdPSxPywUPeH1Qdi56xc8XD0KhP9dPSxPywUPeH1XIY+NnDf2UqqbnYYroom9FHI6JZJEDRstuJkAS2p48HWyry53gnxJ9bIHIY+NnDf2UnQY+6L4T++UqtzsMVLkTeisVjEskh5UoW3E8MRnS4GL7DDDDFdFbXoo5HQ3JIgaNmdxMgCW1PHg60Kq5c7wT4k+tlVTDDDFS5bXorFYw3JIeVKGdxPDEZ0uBi+zKthhhiuitr0UcjobkkQNGzO4mQBLanjwdbVXTne135t+CQOxc9YueLh6FQn+unpYn5YKHvD6uqksq+xc9YueLh6FQn+unpYn5YKHvD6sqsMNz1LltdcsVjDc7h5UoZ288MRnS4GL7AMMMMV0VteijkdDckiBo2Z3EyAJbU8eDrdVGGG566K2uuRyOhudxA0bM7eZAEtqePB1sq9i56xc8XD0KhP8AXT0sT8sFD3h9XVSQSq3O3PUuRN1yxWMSzuHlShbbzwxGdLgYvsyrbnbnroom65HI6JZ3EDRstt5kAS2p48HWm52566KJuuRyOiWdxA0bLbeZAEtqePB1u/0gyr7Fz1i54uHoVCf66eliflgoe8Pq6qSwBYYYYrora9FHI6G5JEDRszuJkAS2p48HW7/SBJJJIEkkkglVuduepcibrlisYlncPKlC23nhiM6XAxfZVUpVbnbnqXIm65YrGJZ3DypQtt54YjOlwMX2Sr053td+bfgkEqtzsMVLkTeisVjEskh5UoW3E8MRnS4GL7NVG5256lyJuuWKxiWdw8qULbeeGIzpcDF9kq9Od7Xfm34JOnO9rvzb8EgdOd7Xfm34JOxc9YueLh6FQn+unpYn5YKHvD6rlzvBPiT62UqtzsMVLkTeisVjEskh5UoW3E8MRnS4GL7ANzsMVLkTeisVjEskh5UoW3E8MRnS4GL7Dc7c9dFE3XI5HRLO4gaNltvMgCW1PHg62quQx8bOG/spVU3OwxXRRN6KOR0SySIGjZbcTIAltTx4OtDKthhuepctrrlisYbncPKlDO3nhiM6XAxfZVXbR+jvM7xDFYt/JQUUM8wdN3QdaqmGG566K2uuRyOhudxA0bM7eZAEtqePB1uVbDDc9S5bXXLFYw3O4eVKGdvPDEZ0uBi+wKq7Fz1i54uHoVCf66eliflgoe8Pquxc9YueLh6FQn+unpYn5YKHvD6sqtztz10UTdcjkdEs7iBo2W28yAJbU8eDrdVG52GK6KJvRRyOiWSRA0bLbiZAEtqePB1oSr053td+bfgllXKqm52GKlyJvRWKxiWSQ8qULbieGIzpcDF9mqjc7c9S5E3XLFYxLO4eVKFtvPDEZ0uBi+wJV6c72u/NvwSqphhhipctr0VisYbkkPKlDO4nhiM6XAxfZKvLneCfEn1snLneCfEn1sgdBj7ovhP75OnO9rvzb8EqqYYYYqXLa9FYrGG5JDypQzuJ4YjOlwMX2Sr053td+bfgkGVcqqYYYYrora9FHI6G5JEDRszuJkAS2p48HW1V2LnrFzxcPQqE/wBdPSxPywUPeH1XLneCfEn1sgdtH6O8zvEMVi38lBRQzzB03dB1nQY+6L4T++TsXPWLni4ehUJ/rp6WJ+WCh7w+rVTc7c9S5E3XLFYxLO4eVKFtvPDEZ0uBi+wJV5c7wT4k+tllXKqm52GKlyJvRWKxiWSQ8qULbieGIzpcDF9mqjc7c9S5E3XLFYxLO4eVKFtvPDEZ0uBi+wMq2GG56ly2uuWKxhudw8qUM7eeGIzpcDF9lVdi56xc8XD0KhP9dPSxPywUPeH1XLneCfEn1snIY+NnDf2Ug1UkllX20fo7zO8QxWLfyUFFDPMHTd0HWqphhueuitrrkcjobncQNGzO3mQBLanjwdaEq9i56xc8XD0KhP8AXT0sT8sFD3h9Wqm5256lyJuuWKxiWdw8qULbeeGIzpcDF9kq9i56xc8XD0KhP9dPSxPywUPeH1XbR+jvM7xDFYt/JQUUM8wdN3QdYJVYYYYrora9FHI6G5JEDRszuJkAS2p48HWm52GKlyJvRWKxiWSQ8qULbieGIzpcDF9lVdi56xc8XD0KhP8AXT0sT8sFD3h9Vy53gnxJ9bIHTne135t+CTpzva782/BLKuW/zc7c9S5E3XLFYxLO4eVKFtvPDEZ0uBi+wMq252566KJuuRyOiWdxA0bLbeZAEtqePB1tVdi56xc8XD0KhP8AXT0sT8sFD3h9Vy53gnxJ9bJ20fo7zO8QxWLfyUFFDPMHTd0HWCqmGG566K2uuRyOhudxA0bM7eZAEtqePB1tVSyr5c7wT4k+tlqpIEkkkgSSSSDKvlzvBPiT62VVNztz1LkTdcsVjEs7h5UoW288MRnS4GL7JV5c7wT4k+tk5c7wT4k+tkDpzva782/BJy53gnxJ9bLKuWqnLneCfEn1sg1UlKrc7DFdFE3oo5HRLJIgaNltxMgCW1PHg62VeXO8E+JPrZOXO8E+JPrZA6c72u/NvwS1UlgCwwwxXRW16KOR0NySIGjZncTIAltTx4Ot3+kGALDDc9S5bXXLFYw3O4eVKGdvPDEZ0uBi+zVRhhhipctr0VisYbkkPKlDO4nhiM6XAxfZKvIY+NnDf2UqqbnYYroom9FHI6JZJEDRstuJkAS2p48HWhKvQY+6L4T++Tto/R3md4hisW/koKKGeYOm7oOtlXLf5hhueuitrrkcjobncQNGzO3mQBLanjwdaGVbc7c9dFE3XI5HRLO4gaNltvMgCW1PHg62qunO9rvzb8EqqbnbnqXIm65YrGJZ3DypQtt54YjOlwMX2Sr0GPui+E/vkEqtztz10UTdcjkdEs7iBo2W28yAJbU8eDraq5c7wT4k+tk7aP0d5neIYrFv5KCihnmDpu6DrVUww3PXRW11yOR0NzuIGjZnbzIAltTx4OtDAGWqnLneCfEn1stVJZV9tH6O8zvEMVi38lBRQzzB03dB1gqphhueuitrrkcjobncQNGzO3mQBLanjwdbKvLneCfEn1ssq5b/ADDDc9dFbXXI5HQ3O4gaNmdvMgCW1PHg60DDDDFS5bXorFYw3JIeVKGdxPDEZ0uBi+yVenO9rvzb8EpVYYYYrora9FHI6G5JEDRszuJkAS2p48HW1V0GPui+E/vkDlzvBPiT62Tpzva782/BLKuWqnQY+6L4T++QSq3O3PXRRN1yOR0SzuIGjZbbzIAltTx4Otqrpzva782/BKVW52GKlyJvRWKxiWSQ8qULbieGIzpcDF9lVdtH6O8zvEMVi38lBRQzzB03dB1gdi56xc8XD0KhP9dPSxPywUPeH1XbR+jvM7xDFYt/JQUUM8wdN3QdaqmGG566K2uuRyOhudxA0bM7eZAEtqePB1sq8ud4J8SfWyDKuW/zDDDFS5bXorFYw3JIeVKGdxPDEZ0uBi+yVeXO8E+JPrZZVyDqollX053td+bfgllXLVTto/R3md4hisW/koKKGeYOm7oOsEqtztz10UTdcjkdEs7iBo2W28yAJbU8eDraq6c72u/NvwSdtH6O8zvEMVi38lBRQzzB03dB1sq5BVTc7c9dFE3XI5HRLO4gaNltvMgCW1PHg63VRhhueuitrrkcjobncQNGzO3mQBLanjwdbKvbR+jvM7xDFYt/JQUUM8wdN3QdZ2LnrFzxcPQqE/109LE/LBQ94fVByGPjZw39lLVSWVfbR+jvM7xDFYt/JQUUM8wdN3QdbVSQJJJJAkkkkGVfLneCfEn1snTne135t+CWqkkgyr6c72u/NvwSlVudueuiibrkcjolncQNGy23mQBLanjwdbv9JIEsq+nO9rvzb8EtVJJBgCwwwxXRW16KOR0NySIGjZncTIAltTx4OtqroMfdF8J/fLVSSQZV8ud4J8SfWydOd7Xfm34JaqSSDAFhhhiuitr0UcjobkkQNGzO4mQBLanjwdbqoww3PXRW11yOR0NzuIGjZnbzIAltTx4OtqqSQYAsMMMV0VteijkdDckiBo2Z3EyAJbU8eDraq6DH3RfCf3y1UkkEqsMNz10VtdcjkdDc7iBo2Z28yAJbU8eDrTc7DFdFE3oo5HRLJIgaNltxMgCW1PHg62qpJBKrDDDFS5bXorFYw3JIeVKGdxPDEZ0uBi+yVeQx8bOG/spaqSSDAFhhhiuitr0UcjobkkQNGzO4mQBLanjwdbVXIY+NnDf2UtVJJBgCww3PUuW11yxWMNzuHlShnbzwxGdLgYvsqrkMfGzhv7KWqkkglVhhueuitrrkcjobncQNGzO3mQBLanjwdbVUkkgSlVhhhipctr0VisYbkkPKlDO4nhiM6XAxfZVUkgyr5DHxs4b+ylKrc7c9dFE3XI5HRLO4gaNltvMgCW1PHg63f6SQSq3OwxXRRN6KOR0SySIGjZbcTIAltTx4OtyrbnYYqXIm9FYrGJZJDypQtuJ4YjOlwMX2b/SSDKvto/R3md4hisW/koKKGeYOm7oOtqpJJIMAW52GKlyJvRWKxiWSQ8qULbieGIzpcDF9m/0kkglVhhhipctr0VisYbkkPKlDO4nhiM6XAxfZKvLneCfEn1stVJJBlX053td+bfglqpJJIEkkkgSSSSBJJJIEkkkgSSSSBJJJIEkkkgSSSSBJJJIEkkkgSSSSBJJJIEkkkgSSSSBJJJIEkkkgSSSSBJJJIEkkkgSSSSBJJJIEkkkg/9k=",
            transactionId: "transactionId - 1234",
          },
        ]);
      }
    }

    setEventViews(0);
    setEventMoney(0);
    setEventAcceptedTickets(0);
    setEventPendingTickets(0);
  }, [relationship, eventID]);
  const navigate = useNavigate();

  return (
    <div className="EventBox">
      <div className="event-box">
        <img
          className="event-box-image"
          src={
            relationship === "member" &&
            extendedData[0]?.status &&
            extendedData[0].status === "Approved"
              ? extendedData[0].QR
              : eventImage
          }
          alt="None"
          style={{
            width: "20vw",
          }}
          onClick={() => {
            if (
              extendedData[0]?.status &&
              extendedData[0].status === "Approved"
            ) {
              setIsQRPopUpActive({
                status: true,
                QR: extendedData[0].QR,
              });
            } else {
              navigate(`/event/${userID}/${eventID}`);
            }
          }}
        />
        {/* <Link to={`/event/${userID}/${eventID}`} className="event-link"> */}
        <div className="event-info">
          <div
            className="event-box-info"
            onClick={() => {
              navigate(`/event/${userID}/${eventID}`);
            }}
          >
            <img className="icon" src={addressIcon} alt="None" />
            <div>{eventAddress}</div>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr max-content",
              alignItems: "center",
            }}
          >
            <div
              className="event-box-info"
              onClick={() => {
                navigate(`/event/${userID}/${eventID}`);
              }}
            >
              <img className="icon" src={dateIcon} alt="None" />
              <div>{eventDate}</div>
            </div>
            {relationship === "owner" || relationship === "manager" ? (
              <img
                onClick={() => {
                  navigate(`/scanPage/${userID}/${eventID}`);
                }}
                alt="None"
                src={scanIcon}
                style={{
                  height: "5vh",
                  justifySelf: "right",
                  padding: "0 1vh 1vh 0 ",
                }}
              />
            ) : (
              ""
            )}
          </div>
        </div>
        {/* </Link> */}
      </div>

      <div className="PendingList">
        {relationship === "owner" ? (
          <div className="event-box-info stats-grid">
            <div className="stat">
              <div>{eventViews}</div>
              <div>Views</div>
            </div>
            <div className="stat">
              <div>{eventMoney}₪</div>
              <div>Money</div>
            </div>
            <div className="stat">
              <div>{eventAcceptedTickets}</div>
              <div>Accepted</div>
            </div>
            <div className="stat">
              <div>{eventPendingTickets}</div>
              <div>Pending</div>
            </div>
          </div>
        ) : (
          ""
        )}
        {extendedData.map((item) => {
          if (relationship === "owner" || relationship === "manager") {
            return (
              <div className="AcceptBox" key={item.transactionId}>
                <div>{item.name}</div>
                <div>{item.age}</div>
                <img
                  alt="None"
                  src={checkIcon}
                  className="pending-icon"
                  onClick={() => {
                    console.log("ToDo send Accept", item.transactionId);
                  }}
                />
                <img
                  alt="None"
                  src={xIcon}
                  className="pending-icon"
                  onClick={() => {
                    console.log("ToDo send Declined", item.transactionId);
                  }}
                />
              </div>
            );
          } else {
            return (
              <div className="status-box" key={item.transactionId}>
                <div style={{ padding: "1vh" }}>{item.status}</div>
                <div style={{ padding: "1vh" }}>{item.price}₪</div>
                {relationship === "member" &&
                extendedData[0]?.status &&
                extendedData[0].status === "Pending" ? (
                  <div
                    style={{
                      padding: "1vh",
                      gridColumn: "span 2",
                      fontWeight: "bold",
                      border: "1px solid white",
                      borderRadius: "15px",
                    }}
                    onClick={() => {
                      setIsCancelPopUpActive({
                        status: true,
                        transactionId: item.transactionId,
                      });
                    }}
                  >
                    Click Here To Cancel
                  </div>
                ) : (
                  ""
                )}
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default EventBox;
