import { useEffect, useState } from "react";
import "./EventBox.css";
import { useParams } from "react-router-dom";
import tempEventImage from "../../../img/Temp Event Img.png";
import addressIcon from "../../../img/pointonmap.svg";
import dateIcon from "../../../img/calendar.svg";
import checkIcon from "../../../img/check.svg";
import xIcon from "../../../img/red-x.svg";
import { Link } from "react-router-dom";
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
            QR: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATsAAAE5CAYAAADvFIfMAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAEkfSURBVHhe7Z0H3BTVuf+Ta4zXGPUiamINGgsRsVwxFsRrwd4IKrH3iooRjF1U7B0VLNh7jwVQ0WBvXKygoKJir2CJ0Wiimf/7PXf2n83w250zu2d2dvd9fp/P96O87zvnnDkz89uZ2ec5z48ik8lk6gQyszOZTJ1CZnYmk6lTaBazGzt2rJHCiy++GM9WOH3wwQfRhAkTotGjR0vuu+++6JFHHom+/vrreIti9O6770ZjxoyRYywxderU+K/9xN+rdkrQH/0WKead+ec4qDFmZfr06dE///nPuPXq4nxT56Hx76RpFrM74IADolVXXdWownXXXRfPVjgNHTo02nTTTaNevXpJVl999Wi99daLrr766niLxuuLL76IjjjiCDm+cnbYYQdvc+Lv+HvVTjn0S/9FiXln/jkOanxZGThwYPThhx/GrVcX55s6D41/ceCBB8azVVnS7H70ox8ZVcjD7FZYYQXZV5Lf//738RaN1zvvvBMttNBCclzl/Md//Ef06KOPxltVF3/H36t2yqFf+i9KzLsaV63MNddc0XPPPRe3Xl2cb6oN41+Y2eVEZza72WefXY4rybhx4+Ktqou/U9snod92MjuYOHFi3Hp1mdmlY2aXE53Z7NSYFPfcc0+8VXXxd2p7RbuZ3f/+7//GrVeXmV06ZnY5YWaXjpldOmZ24TCzywkzu3TM7NIxswuHmV1OmNmlY2aXjpldOMzscsLMLh0zu3TM7MJhZpcTeZgd8VuqryQcn6L02muvyTEpbrzxxnir6uLv1PaKoszuhx9+iDbeeGM5plr5z//8z+iZZ56Je6guM7t0cjW7+eefv+1Q+6nIw+z69+8fLbzwwlGXLl0kjG/RRReNLr300niLsPrss8+qQobH448/LudDccIJJ7iA4RkzZsj2+Dm/5+/U9oosZvf555/LfrMwc+bM6KOPPoqeffbZqHv37nJMijnmmEMeQ+jatWu04IILRn379o0mT54cj7a6sphd8pxuB9R+JsnV7H7zm99EI0aMaBvOPPNMuZ+KPMzuzjvvjEaNGhWdd955EsaI0U2bNi3eIpzef//9aNiwYdHgwYOjQYMGSfbdd99oxx13lPOhIKp9r732ciehao+f83v+Tm2v8DU7jPTkk0+OhgwZIvv25aCDDor222+/qF+/fi4IWI0pyTzzzBPtvPPO0bnnnhsNHz58luN4/vnnRyNHjoweeOCB6NNPP41HXF1ZzO6ss86a5dxuZfAZtZ9Jcje7dhKf5Go/FXmYXZG66qqr3CfobLPNJve3WfA1O94DLrDAAt4B0CFZeumlo5dfftk9+vrmvqYpi9lxR9tOMrPLQZ3Z7LijU/vZbPiaHXdUavtGwBdNoWVmp/e1HDO7DOrMZnfIIYfI/Ww2fM2OR0i1fSMwswsrM7scZGan97WZMLNLx8yusszsYpnZ6X1tJszs0jGzqywzu1hmdnpfmwkzu3TM7CrLzC6WmZ3e12bCzC4dM7vKMrOLZWan97WZMLNLx8yusszsYnVms7vggguin/zkJ3Jfmwlfs7v11lu9Vj/OAzO7sGo5syNotSjGjx8fj6K68jC7v//9727pbeoXhOLtt9+OWw8ncl457rvvvnu0yy67SLbaaqtojTXWkPOh4KLffvvtXTaBao+f83v+Tm2v8DU70tD233//qvuThQ022MA74LpVzI7rQl0vjcJXLWd2FCpZYoklCuGYY46JR1FdeZgdFx0X9ZJLLhkMUo3yELmvGOkbb7whwbSvueYaOR+K008/PXr11Vej119/XbbHz/k9f6e2V/iaHUrbnyxQJ6Nbt25yTElaxey4LtT10gjwA1+1pNmpNhpBkWZHAvm8884r26iV3XbbLW698XrllVfkmBTttMTT999/7xL31ZiStJLZqe0bgZldThRpdqxXpravh+222y5uvfF666235JgU7bae3TbbbCPHlMTMLh0zu5xoN7OzxTuLke/inWZ26ZjZ5YSZXTiZ2elxlWNml46ZXU6Y2YWTmZ0eVzlmdumY2eWEmV04mdnpcZVjZpeOmV1OtJvZDRgwIG698SKU48c//rEcV5J777033qq6xo4dK7dX5BFj6CtiAtWYkvTs2TPeIpzM7HQ75ZjZddBuZrf11ltH//jHP+IeGitCT6iTocZVzpxzzhk9/PDD8VbVddddd8k2FPRflFieXY0pCdcFy8KHlJmdbqccM7sOWsXs5p577mixxRZzhV0ULPfN7wmBIH6PgNypU6dGU6ZMaRgPPfRQtMMOO7hjr8YIyy67bLT++utHjz32mHvsxKBUWyVOOukkOR+K66+/Ppo4caJsJytvvvmmdw0IdOWVV8r9LYfA45VWWim65ZZbZJ/l0Dfxez4ys9PtlGNm10GrmB0mduGFF0Y33XSThD7JniBpf9ttt3Wmw3ukRkF83/HHHx/dfvvt0c033yzHCJRG5NH04osvducSj3+qvRI89qn5UPTp0yfafPPNZTtZ2XXXXV2BI1+99957cn/LoT2K9Gy00Uayz3IocOR7B2hmp9spx8yug1YxO6qLffvtt/GWWvz+kksuKSRpn8T6tdZaK/r444/j0VQWj9mkyVEbVbXVLKy55ppBXwl899130X333ece41V/5VBOkcI8PjKz0+2UY2bXQauY3YsvvhhvVV3cQajtGwG5ub6PXptssolso5mgotrf/va3eMRhxHFUfSl4JPeRmZ1upxwzuw7M7MKx+OKLe5cHbAWz4z1pkWbH+eEjMzvdTjlmdh2Y2YWDL0h81QpmR+FrM7vGY2aXE2Z24TCzS5eZXTpmdjlhZhcOM7t0mdmlY2aXE2Z24eCdna9a5Z3d119/HY84jMzs0jGzywkzu3DwbayvWsHsunbtGn355ZfxiMPIzC4dM7ucaDeze/LJJ93S1j/96U+981RD0KVLl6hfv37xKNJ19NFHu9SyogrfpEEsXO/evaOXXnrJxdrxLXMlssjMLh0zu5xoN7PjToRI/aOOOir64x//GB166KH/xpAhQ9wxJIp/9tlnl30lWXTRRV3kP9kZyfZKnHzyydHdd98djyJdBMyec8450WGHHSbbY5yDBg2K1l13XTmmephvvvmigQMHVtwf+ua/p512mstKGT58eHTWWWdFZ555ZnTGGWf8f/g3+3DDDTd43wGa2aVjZpcT7WZ2iEj9r776SvKXv/wl+uSTT1yCPS/gVV9JuGMjdemLL76QbZbjK+6I1PYlGOfMmTOj8847T46pHqiCRqZHpf2hb3JTuUvecsstXXAx7+9+/vOfuzkrwb//67/+y+W9Tp48Od6z6jKzS8fMLifa0ex89P7773ubHY+cRYkar2pM9eBblOijjz6KFlpoIdlGObwu8F2fz8wuHTO7nOisZkdIha/ZUUG/KGVZvNMXHl999Ne//tU7f5cvhnxkZpeOmV1OmNnp/soxs9PtlGNmFw4zu5wws9P9lWNmp9spx8wuHGZ2OWFmp/srx8xOt1OOmV04zOxywsxO91eOmZ1upxwzu3CY2eVEZzU7TnoCgVVfSQj/KEp5mB0xgz4i9CW02U2aNMkr2Ju/sfXs0mVml4HOanZkBiy11FKyryQsB1+U8jC7PffcM269ul577bXgZkd9CZ8PGeL3nn/++Xir6jKz0+2U0zRmx3r/a6+9diG0o9lRxIaCNtW46qqrXK0KUqIqQfDtaqutFp1//vmuiM9TTz0l2wKK+3AnFFp5mN2KK67oqpup/SgxZsyYaOjQod5L3PuaHcHZZLao+S6HLA7i/HyUl9mp66UR4Ae+ajmzGz9+fKH4qFXM7vXXX3fFb/r27VuVnXbaKbr22mujBx54oCLjxo1z9V256LfYYoto4403lm0BRWJInwqtPMwO1llnHbkfJXr16hX94he/kNsqfM0OEdCt5rscCvj4Kg+zU9dJI/FVy5ldK6hVzG706NFy+yQcH8ot+ogX+qqNJJQJDK28zC40WcwutPIwu1aRmV0OahWzoyap2j4J7418S/X5mh2rrYSWmV26zOz0vpZjZpdBrWJ2XHRq+yS8eCe0wke+ZpdlpWJfmdmly8xO72s5ZnYZZGan2ynHzK4YmdnpfS3HzC6DzOx0O+WY2RUjMzu9r+WY2WWQmZ1upxwzu2JkZqf3tRwzuwwys9PtlGNmV4zM7PS+lmNml0FmdrqdcvIwuzvvvFP21WyY2RWjpjG7b775pm0ws9PtlJPV7FiMoBKUMCSw9sorr4x+/etfu/QpiuDMMcccktlmm02OqRIUJFLtJFHbKrKY3Q8//CD3uRz+xldZzI7zWJ3frUpTmB3r9h9++OFthdpPhZlduqjZQBrascce64oDKY477jhXyKeck0466d848cQTo+OPP97VyZhnnnnkuJJgnPvvv79bbj7ZXgn6HzBggHeFNl+zw2y4W2XMpGQl95mfsd+33367q5Phoyxmp87rVgafUfuZJFez68yY2aXrhBNOcKUUqXBGOcUk/Jzf77XXXtHbb7/t7vQoafj999//G/zs22+/jZ5++mnXvxpXEvIv33nnHVdcJ9leCYrukD8bOjeWrJVVVlnFzT9tJ/ebn3FHSTbKCy+8EG9VXVnMrrNiZpcTZnbp6t+/v2wjCTm5Pvr73//ubXb77rtvvFV1UYXN91HW1+x8l3iCPJZ46qyY2eWEmV26NtlkE9lGEv7OV75mx/74iLs75km1kcTX7DiOansF54ePzOzSMbPLCTO7dLWC2TE/ZnbtgZldTpjZpcvMLh0zu3CY2eWEmV26zOzSMbMLh5ldTrSC2RGzZmZXXcwP86TaSGJm19yY2eVEkWZ38803y+2TdO3aNbjZZVnPLg+zo3/VRpIsZsc8qTaSMO8+MrMrBjO7nCjS7O6//36v0AbqSxCf5qNTTjlFtlEOMWJ9+vSJt0hXHmZH/4xDtVMO++Mj5od5Um0kYYn7f/7zn/GWWsQE/vnPf5bbK8zswlGT2Z166qkuRsqoTJFmR4oVcWTUhKjEzjvv7Aru+KYkUWxnt912i3bYYQfZHtAnqV2+ysPs6L/avjN+9oP98RHzwzwxX6q9EptvvrnLfrjiiiui66+/3j3SKkaOHBntuOOOcj8VWcxOnYfGvzjttNPi2aqsWcyOi85Ix0d5mB2ioAsl+yrxxhtveD/CljR9+nRXWlC1B5hsljbzMDv6ZxxqfMD42Y8sok3mS7VXguDfzTbbLOrWrVu0zDLLRN27d5cstNBC3l94gK/ZJc89Q5OmWczOFE55mV0rKA+zK0o8vm644YZy/PXga3amMDKzy1Fmdnpfy2kFs0Nbb721HH89mNk1VmZ2OcrMTu9rOa1idry7U+OvBzO7xsrMLkeZ2el9LcfMztQomdnlKDM7va/lmNmZGiUzuxxlZqf3tRwzO1OjZGaXo8zs9L6WY2ZnapTM7HIUwa1zzz23PNHLYRnxl19+Od6qPeT77eVGG20Ufffdd/FWzSuWeVfjrwczu8ZqFrMjpujDDz+MPvjgAxfAqeD3n376abxFulhllm0IhlXttQKMnTnJUr2JJbq32mort/x4NTAGliYPLVbirXYcs8Dxoz1fDR48WO5rOb/4xS+iDTbYIJowYYKb30aeH8xLlv258MIL5T6Uw/74fLiVyGJ2nHeMudWvIc4j/KAIzWJ2b775pjtRScvZe++9JX/4wx+iG2+8Md4iXZzMFM9QbbUSzAlFYb744ot4z6qLv3vkkUeiUaNGVeWxxx7LnPHgI9KryHVW+5IVjrlvmhxin9S+lrjkkktcDis1KHbaaadon332kf3mBfOSJf3tlVdekftRzhlnnOFSy5SxKXzNjvOI867aNdkq4AP4QRGaxewuuOCC6Gc/+5k8OCVIiSEfzVdcKPPOO69sq5UgAX+BBRZwxV+aXSSlr7POOt4FZdLgmJMyFVLcrVx22WXRz3/+c9lnnjAvzA/zFEos885NgOpP4Wt2nG+cd761LZoZfAA/KEKzmN1+++0nB5kkS5Hsvn37yjZalT/96U/xnjWvqE3qu3yRL0suuWTcejjdc889sq9GwPwwTyHFF02qL4Wv2XG+qe1bFfygCNVsdksttVS8RbrM7BovLuIs7498WHzxxePWw6lIs2N+zOwaT8uZHVXcfWVm13hxEc8111xy/LWSZaViXxVpdsyPmV3jMbNrIczswsnMLl1mdmFkZlcDZnbhZGaXLjO7MKrL7NKWqS7JzK7x4iIO/c4Os/M95r4q+p3d119/HY8kjMzs0mlJs/v+++/jrarLzK7xwuzmn39+Of5awex8j7mvijQ75idLkLiPzOzSaTmzYwnqyZMnx1tVFpHTK6ywgmyj1SDOibsBYsMI9Ax9lxNSxI+tv/760eyzzy73pRaI9Zo0aVLcQ/2aOXNmdPrpp8u+8ma22WaLVl111eill16KR1O/OCduuOEG2Z/C1+wIwm2XODtSI6n58eWXX8Z71zjVbHYEme65554ujaYSFCA5+OCDvYNGMRJyJRlDKH75y1/KvpJw8hNkuvvuu8t2yI0k6p4qRmSYnHTSSdGIESPkfudJlhxaLjwCONX+lCCqfZ555pFzksTnmPvCuXHCCSdEK620kuxLse2221Y8PlkhY+PYY491mQ98eKkxZoVzYuONN5ZjV/iaHcZAQRnOP85DtT9Z2GOPPXIJ8l933XVlfyUY+zHHHOPmnOJFnANqHuHiiy+OHn744aCZRTWbHXCRkA+oWHDBBR1p2RjlLLfccm4HP/roo2Bsuummsq8kjJPaoG+99ZZsBz7++OPo9ddfjwYMGOACUvm0VfueJ8OHD4+PVLp4RCP/U+1LCe68V1llFTknSbizqHbMs8C5wRz6lEYs8dBDD1U9Pll455133LmGgfJ4rsaYFfYny/nua3aI7AzOP7UvWWHff/vb38ox1QPmpforwfhnzJjhjuN///d//3+PUHPJTQpZWu+++248A/WrLrMLDUVNfGud+uqwww6TfSXhk45E6zRRfo+DoNpoBNyRhBaPFaqvZmPatGnxiMOIxHQCpVVfjSCL2YUWd3dqTPVwyy23xK1X14MPPhj99Kc/lW2U06VLF1f5LZSayux+97vfxaMIJ27/VV9JMDvf1RgYp2qjEbCuWmhRQV/11WxwRxJSPCJlKX0YmiLNjoR8NaZ68P3iLkshcTO7DDKzS5eZne4vb8zs0jGzyyAzu3SZ2en+8sbMLh0zuwwys0uXmZ3uL2/M7NIxs8sgM7t0mdnp/vLGzC6dXM2OODLVaSPIw+zOPPNM2VcSoul9U4e22GIL2UYjyLJoqq+IxVN9NRuhzY7QnCLNbuLEifFIGq8jjzxSjqkefM2O0BO1fRLCknI1u6OOOkp23AjyMDsCf1VfSbp37+41sYSeEHys2mgEpNowhpAq8gMuC6HNjuNdlNmRSfDcc8/FI2m8COhW46oHX7PjjnaOOeaQbZRDrF2uZnffffdFPXr0qApBmFlW1CA7YdFFF3WGotojnWzNNdeMzj777HgU6SKqnCI1pKwpqBlAACrR2AQrs7Ky6huI4ie49KabbopeeOEF2V6JBx54wO2L2k8FsUKqz3I48dW2CuLCxo0bJ8eWlalTp7qiQIMGDYqWWGKJaNlll5XjA455Ecunl5PF7LhI2D+130CNDM4332XrCahmDqrNURbIJvCJ68xLnENqXOWwv77ZNcDrkMcff9zlB6s5J/uHoHzu7NZbbz3ZZ4mePXtGQ4YMiT777LN4xPVrFrPjUe7WW2+tCukeO+64o9xhBbVBKbCCmaj2br/99uj+++930fy+Ip2E1KVtttlGsv3227vUolNPPdVlRlTqG+64447ooosuinbbbbeoX79+sr0Sffr0kfuowMRISVJ9lnP00Ud7r1DCRde7d285tqzw/m+HHXaIhg4dGl111VWufoIaH3DMmU81pkbha3YEH++yyy5u/9R+A3fISy+9tOxHsdZaa0WXXnqpS8FT85MVPmSKzK32uc7ZX4LY1XwoqLBGtThetag554aC4zJs2DC3AITqswSeEPKuDs1idj7iMYo7QLXDimuvvTboahmcJKS7+CRG81juI2q8cuep2qgV7iZ9yvXxN6wio9poBGeddVY8ksrimFMpTW3fKHzNjvNNbV8P5557bvDXB80u9pdiP2o+aoX3cFRgC1noyFc1mR2aMmWK3BkF376EFGa3yCKLyL6S8K2Tj3ik4BtZ1UatkHPq8+nN33DbrtpoBFzIPuKTVm3fKHzNjv1R29cDTwadUeSmhl5thQUDilDNZsezt9oRRR5mR7Kw6iuJr9nxzZxPvl4WevXqFbeeriKXwfI1O96Rqu0bhZld40VR69Bmx9JjRahms8vyKd8KZsdaZCHXfgPWS/NVK5gdZqO2bxRmdo0Xq5WENrumWbzTV2Z26ZjZhcXMrvEys+uQmV06ZnZhMbNrvMzsOtRuZkc8j5lddRG3qLZvFPTvIzO7cOKLOzO7DrPzXWWWmJqQ+u6777zN7qCDDoq3qi4WcsyyyqwPfEGBMfuIv1VtNALfYG4CtdX2jYBzjSBhH7E/qo16uP766+PWO5ey3NT4QrplEarL7Mg84BtMotCT8HMCZbt16+bW+OcRhIpXxNfUCiZHG0S/+5odkdrTp093y1qrNoFsDO4+Cf8gfUjtTwnVRyW4WyMl6JtvvnFjT/bLzwjufPPNN6PtttvOBWWqPvOC40OUPIHXfNP61VdfzTLGEsQCkg6k9rMSqs+scLdNatFSSy3lAk0ZhxofMH72g/1hv9g/1aYv9E0bZK1ccMEFrm2Ol+q7HWEZ9bvvvlse20qoeSzBceS4EFTsKzUuhY9qNjse+1iG+fjjj3cR+IrjjjvOFdj44x//6BKP+Tc5ebXC9mQkUFfCN12NLIa99torOuKII2SbwD7wuMs4CUJmzMl9oV9+T1S+b9/UqCAjg/Yq7TsHnpVZePQ6+eSTZ+k3T9hvisTw/+x3tePDYgGbbbaZ3E8Fd6rcVZMdkuw3C8w7bVDkqNSeGh8wfvaD7divauemL7QJnD8hzuFWgmNOALA6vgpe25Bnra4foE0ylYjR9RUB4gS9J8dWgg82Poh4MktTzWaHcFTuThTcgXHHROoOdy0U1sDZ+bSsl6zvEPhUUe0Ad6AEE5OCRYYAY6YORnJ/+Bm/40BlybRgrKpf4C6SfNPll18+uvfee6NPP/10ln7zhLtd3slQp4Oka8aixlmO2kfFiSee6F5ucx6ovn1he5ZiIpKfVD1yjdW4gPGzH+wP+8X+qTZ9KR1z3hVShY2nCV51qL7bGXV8FZiPzzHPIhbdSDvmHBdSzNJUl9n5iHdWWcrLFQUXiU/BZPaHwkCqjVphoYQil/vhrkmNqx7IRw4pLiDfXFb2J7Sy5IJ3VrgLCy0W8VB9JeGuO025mx3i2xc1wGai6MU7WSmiKOWxeGfoL6UQ73tUX0nYn9Di9YXqy/gXvks8ZZFvzjiLDqfJzC7GzE6Pq1bM7DofZnYdMrNLx8wuXWZ2zY2ZXYfM7NIxs0uXmV1zY2bXITO7dMzs0mVm19yY2XWoyJoNvmB2hBn4aMstt5Rt1ArhKZMmTYpbb7zyMDtWng4pQhbM7JobApBDyzfMqynMjhWKWVVYDbCZYK1933SkjTbaSLZRK0Tps0Z/UQpdXYzUrocffjhuPYzIwPFdsDUPs7PQk+oQPjV+/Ph4tsLJ1zsOOOCAeIvKqsvsiFqmcAdLtFeCWhHEsKkBKkgLwkyqQYCy2rYeCC4mPotbcbUfJciRpDiNakPB3Yjah3KIUr/mmmtkfyUo9PPoo4+61DNfsfAiwbiqvRIEM5OlwN0qmSlqfFmhDgH1C3iUVX1mhTGSGcGHgprjJHmYHUGr1FAgi0TtM7AydZZznfN45ZVXlm0B88hTUeicbSDQnkU06UP1nRXurEinC63zzjvP1UlRfQIxvJy3Y8eOjbeorJrNjnQxTkCqgq2++uoV8f00BnIQr7zyyuipp56qCik7Waqb+UJq2Yorrij3o0SWIi1EdpMGpvahnNGjRzvDU/2VIMODkxNT9BHZLcwTxY5Ue+WQbkMNjgkTJsjxZeXBBx90xrDaaqvJ/rJCO/PNN5+cY0UeZsd8Uh2L4G+1z8BxJEVNjUlB6ttdd90l2wIqdVGJK49CR5gEH55PPPGE7DsrWYplZRFLr1GcSPUJfJhTmtGnPkjNZsdCAL7J+L5wMft8ScAnSOi+84CFEnzeA/I3FOdRbSTh3ZGPyDjgLlm1kYS775DCGDBn1VcjyMPsfMUXTWpMCi5SH/G0obavB/KxO5vqMjue09VE1orv0i/kLLaC2WUpuEN+rGojSRazI6dQtZGER4XQ4vFI9dUIzOzSMbPLoDzWuSKkw0eYQyuYXR6Ld2YxO99Hfd/FO7OIx2fVVyMws0vHzC6DzOzSMbPT/eWNmV06ZnYZZGaXjpmd7i9vzOzSMbPLIDO7dMzsdH95Y2aXjpldBpnZpWNmp/vLGzO7dMzsMoiYIzWJ9YDZ+cTLzJw5syXMjhhEX7Wb2Q0YMED21QhY3r4ovfTSS15BwKzaTZyYj0aNGiXbqAczu1gE8lWDpZcJSFSTqCD3k3SsShDMi3n179/fpU3NmDHDrRqc7Jef8bs777wzk9mxdLPqN0+oP0Hgpq/azexYGp1jxLFV85MHhNrQJ8G9vkqeYwrm0levv/66C7shCFrtOz/jd2ussYYrA0BRG9UnELhPFszAgQPlcVMk+0tC3xR2OuOMM1zb3DiovrPCHPHE5StynVU7JYg9pYBSljbTNIvZvfvuu+6TkZOVxwHF/vvvnylXkBgyCtpQOOOcc86ZBUrfkbK07777urQTcjUh2S8/o+jKuuuu630hzz///K5QDp9kqu+8GDlyZHTjjTfGs5qudjM7ov8vvPBC17aanzwgXpCCLtSf8BF529ddd507P5LnWgmuA9r0WbIf8XcsgnD++efLfednw4cPdxX3Lr/8cleIRvULgwYNctfDsssuK4+bgjtqrt9kvyW4Bk855RT3N2TYDBkyRPadBdrg7pMaKj7CxK666io376Roqjb5OdlU1BEJpVnMjmh6DIJiFmoyawGj4W6w0iMqP+cEHTFiRNS1a1fverQ+kPNJ33ySNLPazexaQcwRrxrIE1XzAlwHlAPFvEOIOxXOd0pCbr/99u5aS/ZZK1w3GG21/GmuA0yJVDXyeENc5/S75JJLuhKnPuK95jLLLOPmvVrxrB49ergFIEJpFrPjk0R1XA8ksfuIuqBq+3rgk7kVZGbXeFG1jFccak6S3HTTTfFW4cQXWKqvWsG4+GD3EU9aqo164IsUH1GjWW2v4IvQUGqI2bFzPsrjWycOaivIzK7xwuzmnHNOOSdJWsXseAfnIzO7DpnZFSMzu8YLs6N2r5qTJK1idrzc95GZXYfM7IqRmV3jZWan26kVM7sOzOzSZWbXeJnZ6XZqxcyuAzO7dIU2u6+//trMLkWENfiuAtwKZsdq2+1mdtOmTYu3ql9mdk2inj17yvEn8TU7XlSb2VUX4R++a/61gtkRNNxuZjdlypR4q/o1i9mdeeaZQePcuLW+4YYb3GNVNfFIQd+qjVrhk+6YY47xSkErUuw7UfeMV+1HCVKM9tprL7cScJqIC0trr0RnNDvi3Z5//nmvFaKZd5ZHDy2Wrqdt1WctUJzGt0YJ8bS+54cvXL+cy9WEDxCkrbZXsGy9b4nTNM1idlTY2meffaJddtnFZUnUw0477eRWHybjguh26icQsZ6En5NFQa2B5M5WgiyKfv36yX5h1113dRWHCGi+4oorXMS26rsZoAQdhsO8q30BjgfZI0TBk5lx9dVXy7aAyHPmXs2bokizw7jJEVX7kSfcqTGXu+22m8s6UHMOO++8s8sQ4C4wtEh75JiqfrPCflDkyPeDnbQ2rg+uE9UecH1xnalzRsH1y3Vc7TrHB/r06SO3V3BsyEZS7ZXjU/5gFrNDpIy9+eab0WuvvVYXPG9TfIU8wIUWWshFWVMXIQmFcInmzrLMO7fMfDKrfoHxU/2MySUCnopgqu9mgJOKgjfTp0+X+wKl/bnjjjvc+71Kcwnsr2+wLBRpdpxrLACh9iNPuKMjd5lqcTwqqTkHXpD7pkFlFXdBHFPVb1Y4d8ilzSL6rnadc31lebXE9ct1zPWs5pxzFh/Icp3zaE4ur2qvHJ86xdLsQorbasxO7UitkGLy1ltvxT1UF5/eqo1mgvdGvu8mMLvQtT+KNDset30De0NDNbuQL8DbUVxn1VK6mgWquqUpd7ND6623nhxgrTD5vsnep59+umyj2Zg0aVI84uri8UttXw9Fmh11YdWYGgF1aNPeMXV2cZ21gtnlXiTbV3379pUDrBUm3zcHkHd2qo1mg+RoH7Wb2VFIW42pEfBtddoXZ51dXGetYHZEkaTJzK5JMLNrPGZ26TKzyygzu3TM7BqPmV26zOwyyswuHTO7xmNmly4zu4wKbXZ8G+n7BQUrsqo2mg1fs7vlllvk9vVgX1CYKonrLPS3/3nQtma36KKLeoeesPSzaqPZ8DU7FkKttrJuLRRpdhZ60tziOuN6U/PXTNRsdmlBxe+9955XxHJJWcyOmDMVNFgO0d1PP/20HFuSLGEvFEMhIFf1mRWCJ32TzMHX7N5+++1onXXWkX2WaIagYjIjuCsgUl8dF37O7zmOHCO1H3niG1Tc2eH4cL2pOcxKLUHFvtRkdj7pYqR/3XzzzfEW6fI1O9bj57FTpYOUc9ttt0UnnHCCS+VR4yuHCGzVVxLeS+y5554u1Ur1mRUyN7baaivZl8LX7CgSQyK16rNEM6SLccdGgaRKx4if83tSnMaOHSv3I0949+mTLtaZ4RgNGzbMXW9qDrNSS7qYLzWZnc9CADxGUcjGV75m17t3b1d5KE2UgCPpOeSCBTxK8SkWSrz45gNB9aXwNTtfFb0QwIEHHpj6eMrv+VD1WdggtLIsBNBZ4foi35XrLZS4LrIsBOBLTWbHRqqxJJwkvvI1O3JEfcQqCKHfI8w777yZHs19RMV31ZcitNkVvcTTJptsIvtKwt8VpSxLPHVWuM5CrTpSUpYlnnzJ1ex4BveVr9mREO4jVnYg4Vi1USuY3bfffhv3EEZFml3Ri3e2gtllWbyzs8J1FnqJtJYzO1Y28FVos+MRhMrvqo1awexCf4IVaXY8LpjZVRdhJ77LsndWuM5CVuVHZnYdmNmFk5lduszs0jGz68DMLl1mdrq/cszsmhszuw6KNrvQ7+x4Ud1O7+wwOzIEVF9JOrPZFRXQ3CpwnXV6syNA0Fe+Zte/f/94i+pi8kN/G8snGC/1Q6pos5tvvvlkX0nyMLtNN91U9pWEvytKmF2W4OvOCNdZpzc7JuGll16qOBH8nMdCEolZ537BBResGBdHQC+R1QMHDoxmzJjhAmdVu/wMWE6a6HcePVV7WaHoyZprrhm9/PLLru9QKtLsiF2jfkC1Oxfi8BZYYAG3WMLHH38c9DH+qKOOch8glZLI+Tm/p4AQISCMt9K5lJf4QOC4h06/axe4vrjOQh8XzvVlllnGzXu9iwxQ0ItkBAoIpalms+MTkehzCmwQiV4JIqbhuOOOiwYPHhwdcsghEjIiCDa88MIL3Z2Gaouf0xbFc4i854JSbWWBKP5BgwZFQ4cOdW2PGDGiYv/nn3++S8TnjsBHRZodojBPtTmikAzV14D5P+uss+R+A/Ny2WWXxS2na/Lkyc5Eqx1zltKm3WpzngWOH+eQ7yIRfLAR2U/+tBpf0XBecj0uu+yy8pypB24u9t13X1fwR/UNHB/O99AicYBrmHmvdn74cNhhh7msK1Jc01Sz2eHIvAAnHUtBnmnXrl2jHj16uLoJ3OF9/vnnrq5lEn7O72+//fZo+eWXd49fbK/a5Hc8+hD9TiEU1V4W6JsIcW6tN9poI3e3ofoG9of6ruQM+qhos1P7Ww530RgDJx37zXtLtd/Ap+fKK68ct5wuYrNUnyVKx5yCLhxz5rbSvPvC+NmP0aNHx6NIlxpbs0ABHc5NnnjUOVMPXEO0TfC56rucPPTdd9/JvmrFRzWbnS8k/bKMj48wO58UMC4K31VPfMUnAxe06q8cxocx+qhos/MVn65qTEmyfCnlqzFjxgRN+wM+6dtJo0aNkvtZD3zAdTblbnbgaw6+Zdu4qwyZr4f4dOD5X/WXxLfyeauYHY8DakxJFltssXiLcMpj8U72p52UpZyhL7xi6GxqWbPjESikzOz0uMoxsytGZnZhZGYXy8xOj6scM7tiZGYXRmZ2sczs9LjKMbMrRmZ2YWRmF8vMTo+rHDO7YmRmF0YNMbuHHnoobr26spgdgcUhhdn5RtPfdddd8VbV1Y5mFzp/+P7775d91YOZXTrEVHY25W52REn7rgCcxeyokRFSmB1r9Kn+knCB+qgdzY76IyH12GOPBc9gMLNLZ+TIkXHrnUd1mR0BviyPvvrqq1eEZbd9I9qzHNTTTz/dBY8+9dRTEozmhRde8E51IXXoxBNPjNZff325HyXWWmut6IYbbogmTpzoTFz1Ddz9HX300XLsilYwOwJ3iap/8skn5T5nhfkjQp8CQmquS7A0uG+eL7SK2bF4KNXN1NwAS+vzVLT77rvL/VRwjFhFXM1jiTXWWCO64IILomeeeSaaMGGC7DsrWT8EiWtV7WSFc4hr3WeB0ZrNjsBe0ox450LQcCV8sw1QFrMjN7dXr14u60Gx2WabuVVUHnzwwbj1dPEekDsNtR8lKGV4wAEHuPbJG1R9A9kG5AOrsStaweyAfdpwww3lPmeF+aPI0bhx4+Rcl7j33ntd2pvvKi6tYnbDhw93hW3U3MAGG2zgPgh8V1MmOPvggw92tU/UPJZz7LHHRltssYVbdUb1nRV8g8p3PuLmh6Jeqp2scA6RDULRpjTVbHZLLLFE8EeaPG7XuUhCC6NTfdVDq5hdaNZee22vxRfeeeedaJFFFpFtJGkVs+MuS42/VngdwNOMj0IfczKlxo8fH7deXdyNhc6a4QYkTTWbHalDoV9W52F2hx9+eNx6OFFZTfVVD53V7Lh78RG5lLwzVG0kaRWzW3XVVeX4a4VoAt/MojyKx999991x69XFo7navh7wrTTVZXah1Spmx+Ox6qseOqvZZVm808yuOpgdX7T5iOtCtVEPXL8+IhRNbV8PZnYdmNmly8yuGJnZhcPMrgMzu3SZ2RUjM7twmNl1YGaXLjO7YmRmFw4zuw7M7NJlZleMzOzCYWbXQR5mt+2228q+aoWTlGXMi1KRZkedDJ/A72+++cbb7PbYY494q+YV4TbUv1DjrxViX30D+PMwu2uvvTZuvbryuM6PPPLIuPXKalmzwyCqQZ4rZeCOOOIIdwIQrU74Qq1QZvHLL790KyQTCMvy3wR7qr59oWYp4+zdu3em4OvQKtLsWJL9ueeec8eHLJbkvPMzan4QruBrdpgIMaD1HvMSPtH55cK8VTvA/lCDgQ834jVZHVudG1mgYBSZE3369HFB8dzdqb6BOeF64Lrg+uD8U22Wo+ZYQR0TAvPVcQR+zu/JVFLbK9R4ymH8XIu33nprPPuV1bJmt/nmm7tiOUywggI/uD2R4kwu/6aoTj2QKgW0S7Aybaq+fWFcrD5BFgo1GYpSkWbH3Ui/fv1c4RQycpJzzs+4MHnc5YJWbSShTYrJ0GayvSxwfE899dTopptucibhI44j8WYnnXSSO1dUu+wTcW4U1OFcUudGFoYNG+aWoj/jjDPceOmD8z7ZL7BPnHf8nr6rncNcX1xnao4VPJYfeOCB8jgCP6fAzyqrrCK3V5AdUe06Z39JffNZGKRlzY4TivJ/lOBT8OnJXRgnAqllpBoRYV4rfIpwsXXr1s1VQCOinzqzqu+sFK0iza6EmvNy1DbVIKJftZMFjjnnzXLLLRc9++yz8WxV16uvvuoueu76KVWZbJOfUd5y8cUXj66++mp3B6rOiazwmM97X3K7OU+T/ZZgf7geMGOuD64T1R5wfXGdqfmthOozidquEqS+lUptVsNHLWt2b7zxRrxVdZ1yyily+3rIo7xckWoGs2t2ODd9NGnSJLcqj2ojCYn+IcXjPiUSVV9JfNez4zpT2zeKkF/ctaTZcTL5vojloKo26sH3xG8Vmdmlw6Osj7g41fYKVusIKd6L8Qiv+kria3ZcZ77mnQch32W3rNn5rlRsZpcuM7t0WsHsyFWnir/qK4mv2XGdFWl2r7/+ejyS+mVmVwNmdp0PMzvdTt74vq7ykZldDZjZdT7M7HQ7eWNmZ2YXVGZ26bTKO7vQZseSUUWaXds+xrKUueorCUGUZnbhZGaXTiuYHcHEoc2O5dO53lQbjWDKlCnxSOpX05gdsTJEQfvE4Sy77LLRzJkz4y2r67LLLpNt1ANpMb61LVpBeXwgtBtXXHFFaiYFKWBZqqWNGTPGO0bMR9RF8V3CnQ+4tHOY32PexOWpNhoBS8hnzWCppIaYHWvTUxzntttuc4aWhLg1DISobiLlt9lmm6oQMc0tu49eeeWVaOedd44GDBgg28oCObGs20/kOSf/jTfeKPcHWKKavn318ssvuwtFtZUV1uP3rQeAnn/+eVcYabvttpP7DeSwdu/eXZ4LClK7qA/Qv39/2V4rQRT/oYceGl166aWu2JKac7j44otdTQk1HwrmmwB11VZWrrvuumjvvff2Xu68Z8+e7hyutj9cr9TJCHHtAOcCGRkEVKsxKZjPUaNGyfGVQ4B/mhpidqSnkCLCBPfo0UPChYTRUSCHvMFqkKOaRTz3czus2soChkRFJg7Yr371K3eHqfYFyFMcMmRIPIJ0kWZDjqxqKytUfCMNyPcDAVGacurUqXK/4ZFHHonOO+88eS4oSPGi1gB3Bqq9VoL9oLgLBl7tmHMHRHaEmg8Ff0tdDdVWVigD6luQqATn8DLLLCPbA65XPuQwRDUvWSHgmrtP0sbUeBRzzTWXm3c1vnK4A0xTQ8yub9++so0k6623nku4b2Zxa0/dBDX+JKQN+WqFFVaQbdQKHx5E1IcUZqj6UpDv2y7iMcr3HG43SI/M8pTgozyWePIprNVUZscjYivIt+BOkWZHfmRos5s+fbrsS9FOZod4BFP72e6Qfha6sFYeZseTUZqayuxYFLMV5Lt4Z5Fmx/JRoc2OxQ9UX4p2M7vf//73cj/bHZZPCv1lXFsv3mlmly4zu+aWmV04mdl1YGan26kFM7uwMrMLJzO7DszsdDu1YGYXVmZ24WRm14GZnW6nFszswsrMLpzM7DpoBbMjDMH3m7l2NLuuXbvK/sphNd4HHngg3qr1xTEPXWSpVcDsfFMzfZV19WMfWPY9TS1rdqz1/+mnn7oD0ShYppoAZSLKuegXWGABdzIoFl54YRc36CsCilU7JRZccEEvoymRh9kxB9zhqPGVYJy9evVyQcgzZsxwc5acx1ogkDzLHUaovmmDBSTJAGD+2T+138DvfdO1WoX55psvuuaaa+Tc1ApZGaovBYuRMq9qvsshrz5NLWt2pGpRtITxNoL9998/OuCAA1w8z+DBg90a/iNGjHDpPopLLrnEjdFXpMupdkqMHDnS1dNYeuml5dwlycPsqHNA9aqLLrpIjrEE+3LllVe6T1vmTc1nVshxpjqVj/gQJMiU46XaysLAgQPdfznuzD/HQe0zcE6QIqeOR6vCXfoaa6wxy7zUw1prrSX7UuAJp59+upzvcnxWLm9Js+MTnvSdRn+KstQNKTlceKwwEfpdRjXRF3ez5OWqsSXJw+x8Rb/Ubu3SpYscWy1QcpG7LB+Rh81xCrU0EeX6uKCY/2rHnHOC1CrVhlEb5M375L36qGXNrsiVGIpc4omlhtSYkhRpdog8ZzWuWiHBnXeGPjr33HNlG/WQxxJPRjrko4dSy5odBX5VG43AzC5doc0OzOw6H9OmTYtntn61rNnxUlK10QjM7NJlZmeEoOWWZTezCyczu3SZ2bUPZnZmdqmY2ek2asXMrhiawuxYLNBX9s4unLKY3V/+8pd4q8bLzM4IQVOY3W9+85t4i3TlYXb2bWx1MDvizYpSaLOzb2M7J7maHfUd0uLXuJBImfLVH/7wh9SqR8Rk+aw2ijA7VgvOsgR2CIjbImuCZbqLEHFezJEaWxIKF7HEfciCLllEwDfR72pstcCHK9H3PiIdidi4kCUAzeyKIVezoxYBGQL77ruvK+ChwLyyZAdMmDAhOvzww2VbJbiIqe/gq6uvvtqNQ7WVF8zJySef7IJHfcTfkTZFwZB6oZjLqaee6mogqJNCsdtuu7ksD9VeicsvvzyXx11qDVCHQs1jLZC58NVXX8WtV9cnn3wSHXbYYVXPYYowsTK2ryHmYXYUk1Fjy5tdd93VrWStxpSEMoqrr766bKdWyMhQfSlyNTvumiiMS/rFe++9J+H3WR6RWNaZbd5//33ZHj/nUzvL8s+c0LSp2ssDxsiccHflq1dffTXaaqutXJ5svbA8Nl/KZLlbmX/++d27TdVeCSo9Pffcc/GIw4ljyTGtdMyzQulMShX6imyLaucwFxFFWmaffXY5d0nyMLuHH35Yji1vuKEhf1mNKQl5qdxYqHZqhfQv1ZciV7MzhdOzzz6bueJTEZDL2hmFEfNKRs1JkjzMLnSR7Czafffd5ZiS8AHr+/rAV7zzVn0pzOxaRJzM6gA2G7zQ74wiNKezmh2vldSYkmB2PO2FVJb17MzsWkRmds0tMzs9rnLM7ExeMrNrbpnZ6XGVY2Zn8pKZXXPLzE6PqxwzO5OXzOyaW2Z2elzlmNmZvESsmTqAzUZnNTvCiMzsqoPZZQkJ89FDDz0k+0pC1oyZXYuI+LVWCD3prGZHvJmZXXUwu3fffTfeKoxIMvCJb6TeR65mx8Ey0vERQc9EjHfv3r0qRRti0WZHwPCUKVMqMnXq1MxZHhgZQd2qPXjyySejs88+26XVqTlJQi2NSZMmuZVzVXvw+OOPZyomk8XsiAlUfZZgf3ks95Wv2c0111zRaaedJvvMCseR4kVUnqMOhboWSvTo0cNlSH322WfxiOvXLGZHShJ5r0Zlrrvuuni2qot3HRxg7gqqwYlHLqc62RpBkWZHJg77T9WyapD25ltwB5PbZZddou233162BRtuuKF38SIgJ5pjT0lF1R6Qr82FqrZX+JodRrfPPvvIPkuwv6T++WaZ+JoddOvWTfZZC6TpHX300a4amLoWSlB7gkp+ITWL2VGRSe2w8S98zc5XRKgvueSSsq9GUKTZccH7LOiAifhG8pPepNpoNnzNbvz48XL7JNQp9i1Ok8XsQsJ7OIplhX4P6CMzuxoIbXbcAVI9S/XVCIo0u3HjxskxJSEhvcglnvLA1+x806tYZcZ3kYqizA7WWWedeBSNlZldDYQ2O7TCCivIvhpBkWZ3zz33yDEpzOyqQ43XVjC79ddfPx5FY2VmVwNmduFkZpcuX7PjG85WMDsW8y1CZnY1YGYXTmZ26TKzCyMzuxowswsnM7t0mdmFkZldDZjZhVMWs3v77bfjrarLzC5dZnYdMrNLJ7TZ8W2s78qxecCS70WJehFqTElmm2226JVXXom3qq4TTzxRttFs+Jrd2LFj5fZJqB3TCmb3P//zP/EoGiszuxrIanYEeiqINfrmm29cSsw222zj0mOIQ6qGGk8l1PblEB2/2GKLueXB85Da5xLsO8Gyl156qRsDFyrZDMkx8jO+ZVxmmWWcMZaWZ1cQY8ay3wT/qvmoRLLPJGqbEPia3eTJk13BIQLPMX01RtLe+MDMy+xUn+WobSqx3HLLRS+88ILL+OA8UMcyKz6q2eyob8CEtRNqPxW+ZkedDD6VzzzzTJeZctJJJ/0bFO855ZRT3O/479ChQ13hIQXVuoiiX2KJJeSYknACErF+yCGHyPaAO6ALL7wwU10NXz3//PPRRRddJPe7xPHHH+/GceSRR84ythL8DiigQwGfYcOGybbg2GOPjQ488ED3oaHmJAmPfRtvvLFLS1Jj4GfM39Zbb51Lhouv2WEKN9xwg9tHsg+S4wTmkvPSN8vE93znA5HHzkMPPdTNf7JffjZkyJBoyy23dPUqVBtJSI/kA+mYY46pejx94NriyYTUzDTVbHZ80jCx7QI5eGo/Fb5mRy4llZSo5MSdC4Gx5fAzSkySB0j6DAdMjQ3IDSUhm1xbNaYk3A098cQTbr9UeyW+/fbbeLRhxUlMQR+136V95/dUQJs2bZozXO7MkuPjZ+w7K8iQ4sWHrGqvHDUfCi5kgpqZI+6wk33zM37HcezZs6dsox58zQ5x95Icn8JXvmbHQgDM0Zdfflnx+HA3Sb2VLK9iKByljl1WuLYWWWSR6Pbbb4/3rLLqMrt2Uh5mR2lIHjtUG+XwN74nPp9iqo0knAjcWRalAQMGyHEl4Y7AR5hyljKSPmB2M2bMiHuors0331y2UQ9ZzC60spidzwIDvHfedNNNZRuNgLvwNJnZxcrD7DiZ1fYK35VUSJJW2yfhHY5vndU8tMkmm8hxJeHvfEXZR9VGrWB2vndDvBJQbdRDq5id7+Kdv/vd72QbjWC//faLR1FZZnax2tHssiz5E1p5mB1fZKg2asXMTo+rHDO7Dszs0mVmp8dWjpldMTKz65CZXTpmdukys0vHzC4cZnYZZGYXVmZ26ZjZhcPMLoNaxexYwVVtn6RLly4tYXas7uuj7777LrjZzTfffO64+4igb9VGPZjZhcPMLoNaxexGjx4tt09CXBgxUEWpX79+clxJ1l133eiHH36It6osYgyJy1Nt1ApZGdSU8NFmm20m26gHalYUJQKp1ZiSmNl1kMXsWFa6SHzUKmbHuvzbbbedi2qvBDFhJMP/4x//iLdqvJgjxskS3GqM3NFx98dJ+uCDD7oiLJW4//77XXZEliwGVsNV/Zaz4447Rtdee63ssxyyF/JYNv+ggw6Krr/+etlnnowZM8Yt4a7GlMTMroMsZrfrrrtGa6+9diGQkuKjVjE7REL8Y489VhGCmX0fz/ISQcCM86mnnpJj5K7m6aefdpHvZEb07t27ImuuuabLnFDzplhxxRVdvq/qt5ybb77ZnZtUulL9lggdzFyC6H/uLlWfeeJrdGBm10EWs1tvvfVkG42gHc2unYTpkdqm5qRW9txzz7j16qKsH6l6qg3j/zCz68DMLl1mduniEVXNRz3weOgjVlChSI1qw/g/zOw6MLNLl5ldurIs3ukLK5X4iG+rCdFRbRj/h5ldB2Z26TKzS5eZXXNjZteBmV26zOzSZWbX3JjZdWBmly4zu3SZ2TU3ZnYdmNmly8wuXWZ2zY2ZXQdmdukys0vXrbfeKuejHliu20dmdumwCrCv2W2//fayjUbgc52b2cUyswsrLhAWD60ES60T+nHeeefJ+VCQuF8NgnTJd6X0oI+ymp3qM0mWmEFWk1Zt1IPqpxJq+3IIyyGg2tfsCPlh/sl0Ue3lQemYkzOeJjO7WGZ2YUXO6TnnnOMK5VCsJQlFWgYNGuRyY9V8KLbYYgtX5OWMM86QnH322c48fYtpZzG7X/3qV9HgwYNdYSTVN1AUiTQ1tb2Cv2UuVFtZoXjTtttu613pa4EFFnCP+9wFq/aAlEMKMvma3Z///Gc3/xTBUe3lQemY+9QUNrOLZWYXVlTBInE/a5m9anDHxnHi4quGr7KYHeb8wQcfuNJ/qk/4+OOPo6uvvlpur7j88sujjz76SLaVFVaFefTRR6M555xT9pWER05KWZLWp9orJ4vU9o3AR2Z2sczswsp3iacssAhCSGUxO9YR9BHHUW2v4PwIKV4PUK1O9ZXktNNOi7fqPDKzi2VmF1Z5mN1bb70Vtx5G7WZ23KWZ2VWWmV0sM7uwysPsfN/F+ardzI5HbDO7yjKzi2VmF1ZmdumY2TVWZnaxzOzCyswuHTO7xsrMLpaZXVi1gtkR62dm13lkZhfLzC6sWsHsPv3000LNbuLEifFWYWRmV11mdrGKNrs777zTfZvWLmp2syM2i1WSf/KTn8i+kviaHeExCy64oGyjHP7Gt9iPr8zsqsvMLlbRZkepPqLVuaiq8d5778WtN7eKNDsCbG+77TY5fyWuuuqqaO+995b9KNjGRzwan3jiia7ObDWGDRsWzZgxI94qjIo2u+eff36Wea4V0r8mT54cff/993Hr9cvMLlbRZjf33HO7uqjdu3evypVXXhm33twq0uymTJkSLb/88nL+SiyxxBJR165dZT8KLkAfcceIiTGGavAIHfJCRkWb3RFHHCHnuhaWW265aP/993fzFEpmdrGKNjtffJayaQYVaXaUPlTb14Ov2RWpos0u9BJPPOq/8cYbcev1y8wuVquYHTmNraAizS7LSiq+mNmlK4/17MzsMtBuZsf7nlZQkWbHah1q+3ows0uXmV2HzOzCYWaXLjM7vQ/lmNl1yMwuHTO7dJnZNV5mdtVlZhfLzC6szOwaLzO76jKzi9UqZkc8Xitoo402kuOvFRYB9V3iKQ+zo1ZGswuzY4lyNf4krCYcWltttZXsq1Z+/OMfR9OmTYtbr19mdrHyMLtnn33W+5PWl759+waPzwqtv/3tb9Faa60lx18rv/zlL6NXXnkl7qG6hg8fLtuoFYz2/vvvj1tvXmF2Sy+9tNyHJFdccUW8VRiR/bP++uvLvmqFpeNfeOGFuIf61TCzI4izCIo0u3fffTfaeeedoyWXXLIqFChR/Si6devmlt/m9r5eWLefpcaziNVwVVvl3HXXXS5AWo1fQWEXNS/lbL311tGDDz4Yvfbaa7JPKO0PZrfoootGiy++uGwrK3369ImmT58ez0Dzig9Brt+VVlpJ7kcJgnbJdvDV119/Lee7HI45bavjq+AmIDmucn79619H/fr1i8aMGeM+5FSfwDFneXkfNcTsSM0pivHjx8ejqK48zI5P2ueee87VJagGhU9+9rOfyb6SzDbbbNEGG2wQ7bLLLnWz++67uyh1TNlHpGGNGjVKtlXOGmus4capxp+kS5cuLr1KzUuJa665Jrr++uujY489VvZXgv3h/KWIDOOkxoNqLyvc1f3jH/+IZ6G5xZ3QHXfcIfejBO8fffOw2W/mUc13ORzz2WefXR7jJBgd6XJqbCU45lxnFFjacccdZZ/AMSfQnqyUNDXE7FpBeZidr8h35Y5N9ZU3PKL5vo/65JNPoh49esh2aqVXr14unzRNzFHv3r1TTZTEfqp8/fDDD/GWpnr0+eefu9Q7Nde1svLKK7snhDRxzKk+l3bMOYd93kGa2cUq0uxQ6BMqC7zQ9xHfhvp+evuy8cYbx61XF3eVPNqoNpJwp2wKI6qfZamF6wPvnX3EkxE5sqqNJD5plGZ2sYo2u549e8q+GkEWs+MbMtVGrRCi4iMS7HkHp9pIYmYXTphdyHKY4Gt2HPOlllpKtpHEzC6Dija7FVZYQfbVCLKYndq+HnzNDvl+6WFmF06YXegPOF+zQ75382Z2GWRmly4zu84nM7sOzOzCyswuXWZ2jZeZXQdmdmFlZpcue2fXeBG3WKTZ2Tu7HGRml648zG7TTTeNW68uXlYTbKraSDJ48OB4K1O94pgXaXb4jGojycCBA+MtKsvMLlYRZscFTDwYhVd803zywNfsiFQPGWdHOtAee+zh4vfSUuC4w8AYq2WbEI81//zzu2ByU/0iFo6AajXX9ZDF7MiiSDvm5ANfcskl8RaVVZfZjRgxom0gKFHtp8LX7Fg//4EHHohGjhwZnX/++W4F3XJIa8JoSCmbZ555ZF9J5pprLncCcNt+0EEHRYMGDfo3DjzwQFdIhhPKNybO1+wI/qUGxsEHHzxLv1lh7EceeWR0zjnnuPm54IIL5BzxM36PgfE3Q4YMke0Bd3RE5vumDxG7x/Eh20L1nRXaoUqcr/70pz+5bVRbWWDsXOxjx451eck++vjjj6PLLrvMza1qE04++WSXvaDOmXrIYnY33nijy6JQxxs45scff7xXFlDNZscnaLuh9lPha3ZUR+LAspY+xV1IjVLMMcccsh8FeY0sMMCL45kzZ7o70hL8m2IvRJ6TMoQxqjaS+Jodd6J82pf3WSuMkxOU1CViDJkjPqGTc8O88bsNN9zQlT7kDk+1V46v/vrXv7pliRZeeOGqx8cX2unfv3/cerr40GIb1VYWmLeFFlrIrTTzxRdfxK1X17hx49wXPtxdqzbLUedMPWQxO3V8FT6q2ew6M75m98wzz3gXYfaFjAOfVChMIbTZ5aG7777bK2iV6mssAhBSmB0mofqrldVXXz1uPV2hV4bhA9vX7LI8yYQmi9mFlJldDfiaXZGLd/I40wpmd88998gxKXhZHlKYXegPI75o8tWqq64q26gVXlv4mt3hhx8u22gEZnYthJldOJnZ6XZqwcyuuszsasDMLpzM7HQ7tWBmV11mdjVgZhdOZna6nVows6suM7saMLMLJzM73U4tmNlVl5ldDfia3cSJE+X29ZDF7HzDBoj3K0qEQKgxJeFCzsPsWBJe9VcrRZodwbdmdpVlZlcDvmbHkuy+d1e+ZDE73yRqgnWLEvU0fEJPCBHJw+yIW1T91UqRZkc6nZldZUmz++1vf2tUwdfsPvzwQ5ezx9Lj9UL8FoWLWJ/fR9QOoGYD9SpUeyVWW2216Omnn463arwILN5hhx3k2Mo54ogjvC9kX5FBQb2KtddeW/aZFdLZhg4dGreeLmpvbLbZZrKtrKyzzjouk4APOR/x+oA4P46/ai8P6IvgcDI+itAsZkfKiVGdF198MZ6t6iLjgKpUo0ePrpv77rsveuSRR1ylJ1+RNvXEE0/I9krce++9hddrmDp1qhxbCSpM+RYFyioyUSjKpPrNyoQJE1wwt6/om1cdqq2sPPTQQ5n6ZslzUuU4/qq9PKCvJ598MviHlq9mMTuTyWRqR5nZmUymTiEzO5PJ1ClkZmcymTqFzOxMJlOnkJmdyWTqBIqi/wfbrwDEErnnoAAAAABJRU5ErkJggg==",
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
            }
          }}
        />
        <Link to={`/event/${userID}/${eventID}`} className="event-link">
          <div className="event-info">
            <div className="event-box-info">
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
              <div className="event-box-info">
                <img className="icon" src={dateIcon} alt="None" />
                <div>{eventDate}</div>
              </div>
              {relationship === "owner" || relationship === "manager" ? (
                <Link to={`/scanPage/${userID}/${eventID}`}>
                  <img
                    alt="None"
                    src={scanIcon}
                    style={{
                      height: "5vh",
                      justifySelf: "right",
                      padding: "0 1vh 1vh 0 ",
                    }}
                  />
                </Link>
              ) : (
                ""
              )}
            </div>
          </div>
        </Link>
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
