import './weddingparty.css';
import CrowParents from './CrowParents.jpg';
import PengParents from './PengParents.jpg';
import Nat from './Nat.jpg';
import Taha from './Taha.jpg';
import Matt from './Matt.jpg';
import Mika from './Mika.jpg';
import Tippy from './Tippy.jpg';
import Eggy from './Eggy.jpg';

function WeddingParty() {

    return (
        <div id="WeddingParty" className="WeddingParty">
            <div className='weddingPartyMessage'>
                <span className='Title'> Wedding Party </span>
                <p className='RSVPFYI'><strong>An introduction to our lovely family</strong><br/>
                        Cats and friends are basically family</p>



                <div className='PartyContainer'>
                    
                    <div className='Parents'>

                        <div className="Individual"><div className='ParentsCircle'><img className="CrowParents" alt='CrowParents' src={CrowParents} /></div>Crow Parents</div>
                        <div className="Individual"><div className='ParentsCircle'><img className="PengParents" alt="PengParents" src={PengParents} /></div>Penguin Parents</div>

                    </div>
                    <div className='Friends'>
                        <div className="Individual"><div className='PicCircle'><img className="Nat" alt="Nat" src={Nat} /></div>Maid of honor</div>
                        <div className="Individual"><div className='PicCircle'><img className="Matt" alt="Matt"  src={Matt} /></div> Brother</div>
                        <div className="Individual"><div className='PicCircle'><img className="Taha" alt="Taha" src={Taha} /></div>Best Man</div>

                    </div>

                    <div className='Cats'>
                        <div className="Individual"><div className='PicCircle'><img className="Mika" alt= "Mika"src={Mika} /></div>Mika</div>
                        <div className="Individual"><div className='PicCircle'><img className="Eggy" alt= "Eggy" src={Eggy} /></div>Eggy</div>
                        <div className="Individual"><div className='PicCircle'><img className="Tippy" alt= "Tippy" src={Tippy} /></div>Tippy</div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default WeddingParty;
