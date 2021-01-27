import React, {useState} from 'react'
import {useHistory} from 'react-router-dom';
import axios from 'axios';




const BtnPago = () => {
    const history = useHistory();
    const [title, setTitle] = useState('');
    const [offer, setOffer] = useState(0);
    const [description, setDescription] = useState('');
    const [postDescription, setPostDescription] = useState('');
    const [interests, setInterests] = useState([]);
    const [sex, setSex] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [age, setAge] = useState(0);
    const [scope, setScope] = useState(0);
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [locality, setLocality] = useState('');
    const [whereWillPublicied, setWhereWillPublicied] = useState('');
    const [influencerContent, setInfluencerContent] = useState(false);
    const [ownContent, setOwnContent] = useState(false);
    const [arroba, setAarroba] = useState([]);
    const [hashtag, setHashtag] = useState([]);
    const [duration, setDuration] = useState(0);
    const [post, setPost] = useState(false);
    const [storys, setStorys] = useState(false);
    const [data,setData] = useState({
        title : '',
        price : 0
    })
    const click = async (e) => {
        e.preventDefault();
        const datos = {
            title : title,
            offer : offer,
            duration : duration,
            city : city,
            locality : locality,
            country : country,
            age : age,
            scope : scope,
            post : post,
            storys : storys,
            description : description,
            postDescription : postDescription,
            influencerContent : influencerContent,
            ownContent : ownContent,
            arroba : `["${arroba}"]`,
            hashtag :  `["${hashtag}"]`,
            whereWillPublicied : whereWillPublicied,
            interests : `["${interests}"]`,
            sex : sex,
            quantity : quantity
        }
        setData({
            ...data,
            title : datos.title,
            offer : datos.offer
        })
        const campaignPost = await axios.post('http://iampubli.com:4000/api/campaigns/new', datos);
        console.log(campaignPost)
        setTimeout(async()=>{
            const result = await axios.post(`http://localhost:4000/api/payments/new/${campaignPost.data._id}`, datos);
            console.log(result)
            setTimeout(() => {
                window.open(result.data.init_point,"","",false);
                //history.push('/')
            }, 5000);
        }, 3000)

        
    }
    return ( 
        <div>
        <form
            onSubmit={click}
        >
        <input
            type="text"
            name="title"
            placeholder="coloca un titulo"
            onChange={e => setTitle(e.target.value)}
        />
        <input
            type="text"
            name="offer"
            placeholder="coloca un precio"
            onChange={e => setOffer(Number(e.target.value))}
        />
        <input
            type="text"
            name="descripcion"
            placeholder="coloca un descripcion"
            onChange={e => setDescription(e.target.value)}
        />
        <input
            type="text"
            name="interests"
            placeholder="coloca un interes"
            onChange={e => setInterests(e.target.value)}
        />
        <input
            type="text"
            name="sex"
            placeholder="coloca un sexo"
            onChange={e => setSex(e.target.value)}
        />
        <input
            type="text"
            name="age"
            placeholder="coloca un edad"
            onChange={e => setAge(Number(e.target.value))}
        />
        <input
            type="text"
            name="duration"
            placeholder="coloca un duracion"
            onChange={e => setDuration(Number(e.target.value))}
        />
        <input
            type="text"
            name="scope"
            placeholder="coloca un scope"
            onChange={e => setScope(Number(e.target.value))}
        />
        <input
            type="text"
            name="post"
            placeholder="coloca un post"
            onChange={e => setPost(Boolean(e.target.value))}
        />
        <input
            type="text"
            name="storys"
            placeholder="coloca un precio"
            onChange={e => setStorys(Boolean(e.target.value))}
        />
        <input
            type="text"
            name="ownContent"
            placeholder="coloca un contenido"
            onChange={e => setOwnContent(Boolean(e.target.value))}
        />
        <input
            type="text"
            name="influencerContent"
            placeholder="coloca un influencerContent"
            onChange={e => setInfluencerContent(Boolean(e.target.value))}
        />
        <input
            type="text"
            name="quantity"
            placeholder="coloca un quantity"
            onChange={e => setQuantity(Number(e.target.value))}
        />
        <input
            type="text"
            name="whereWillPublicied"
            placeholder="coloca un whereWillPublicied"
            onChange={e => setWhereWillPublicied(e.target.value)}
        />
        <input
            type="text"
            name="city"
            placeholder="coloca un city"
            onChange={e => setCity(e.target.value)}
        />
        <input
            type="text"
            name="locality"
            placeholder="coloca un locality"
            onChange={e => setLocality(e.target.value)}
        />
         <input
            type="text"
            name="arroba"
            placeholder="coloca un arroba"
            onChange={e => setAarroba(e.target.value)}
        />
        <input
            type="text"
            name="hashtag"
            placeholder="coloca un hashtag"
            onChange={e => setHashtag(e.target.value)}
        />
            <input
            type="text"
            name="postDescription"
            placeholder="coloca un postDescription"
            onChange={e => setPostDescription(e.target.value)}
        />
        <input
            type="text"
            name="country"
            placeholder="coloca un country"
            onChange={e => setCountry(e.target.value)}
        />
        <input
            type="submit"
            value="clic"
        />
        </form>
        </div>
        
     );
}
 
export default BtnPago;