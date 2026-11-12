import CardSelect from './CardSelect'
import queenOfCups from '../assets/images/cards/minor-arcana/cups/medium_qc.jpg'
import fiveOfSwords from '../assets/images/cards/minor-arcana/swords/medium_5s.jpg'

import MiniTree from './MiniTree'
import Tetragrammaton from './Tetragrammaton'

function TheQueenOfCups({ pages, activePage, changePage }) {
    return (
        <>
            <section className='left'>
                <h1 className="section-heading interpretation">Interpretation</h1>
                <p>
                    <strong>The perfect mirror of feeling</strong><br />
                    Water of Water is deeply receptive, imaginative and attuned to subtle emotional changes.


                </p>
                    Crowley portrays the Queen as a figure of remarkable beauty and reflection, whose nature is shaped by the influences around her. 
                <p>
                   She can signify compassion, quiet understanding, intuitive listening and the ability to hold another person's experience without immediately imposing her own will. Yet reflection can become confusion: she may absorb another's mood or mistake a powerful impression for truth. 
                </p>
                <p>
                   Her challenge is to remain open without losing her own emotional boundaries.
                </p>
                <p className="italic">
                    The Queen of Cups often signifies emotional support, compassion, intuitive understanding or a deeply caring relationship.
                </p>
                <div className="divider flex-group flex-align-center"><div></div><span></span><div></div></div>
                <h1 className="section-heading example-pairing">Example Pairing</h1>
                <div className="example-pairing-section flex-group flex-align-center">
                    <div className="card-thumbs flex-group flex-align-center">
                        <div><img src={queenOfCups} alt="" /></div>
                        <div><img src={fiveOfSwords} alt="" /></div>
                    </div>
                    <div className="card-description">
                        <strong>
                            Queen of Cups + <br />
                            Five of Swords (Defeat)
                        </strong>
                        <div className="flex-group flex-align-center">
                            <div className="symbol venus"></div>
                            <h6>Venus (Love/Harmony) in</h6>
                        </div>
                        <div className="flex-group flex-align-center">
                            <div className="symbol aquarius"></div>
                            <h6>Aquarius (Independence/Originality)</h6>
                        </div>
                    </div>
                </div>
                <p>
                    <strong>Elemental dignity (Neutral) </strong><br />
                    The Queen's Water feels the wound, while the Five's Air describes mental conflict and damaged trust.
                </p>

                <p>
                    <strong>Astrological influence </strong><br />
                    Venus in Aquarius introduces the tension between affection and detached judgement.
                </p>

                <p>
                    <strong>Combined interpretation</strong><br />
                    Someone sensitive to others is caught in an argument that has left bitterness or betrayal behind. They may absorb responsibility for a conflict they did not create. 
                </p>

                <p>
                    Healing comes from recognising the difference between compassion and surrendering sound judgement.
                </p>
            </section>
            <section className='middle'>
                <div className="key flex-group flex-center">
                    <div>KEY</div>
                    <strong>
                        Compassion, intuition, sensitivity, empathy, receptivity, imagination, patience, serenity, passivity, impressionability.
                    </strong>
                </div>
                <div className="cards flex-group flex-align-center flex-column">
                    <h1>Queen of Cups</h1>
                    <div className="flex-group card-mask flex-align-center">
                        <img src={queenOfCups} alt="" />
                        <CardSelect
                            pages={pages}
                            activePage={activePage}
                            changePage={changePage}
                        />
                    </div>
                    <MiniTree />
                    <Tetragrammaton />
                </div>
                <h2 className="guide">Intuitive Receptivity vs Distorted Perception</h2>
            </section>
            <section className='right'>
                <h1 className="section-heading element water-of-water">Water of Water</h1>
                <p>
                    The element is doubled: feeling receives and mirrors feeling. This creates sensitivity and calm, but also the danger of passive absorption or emotional distortion.
                </p>
                <div className="divider flex-group flex-align-center"><div></div><span></span><div></div></div>
                <h1 className="section-heading symbolism">Symbolism</h1>
                <p>
                    <strong>Card colours and their meaning</strong><br />
                    Blue: Emotional depth, tranquillity and receptivity.<br />
                    Violet: Mystery, imagination and intuitive perception.<br />
                    Silver-white: Reflection, purity and spiritual sensitivity.<br />
                    Blue-green: Fluidity, adaptability and the influence of surrounding emotions.
                </p>

                <p>
                    <strong>Throne upon still water</strong><br />
                    Receptivity, composure and emotional stillness.
                </p>

                <p>
                    <strong>Shell-like cup</strong><br />
                    The vessel that receives impressions and experience.
                </p>

                <p>
                    <strong>Crayfish rising from the cup</strong><br />
                    Life emerging from the depths of Water.
                </p>

                <p>
                    <strong>Lotus of Isis</strong><br />
                    The receptive, fertile quality of the Great Mother.
                </p>

                <p>
                    <strong>Veils of curving light</strong><br />
                    Layers of perception that reveal and obscure.
                </p>

                <p>
                    <strong>Reflections on the sea</strong><br />
                    The surrounding world mirrored back to its observer.
                </p>

                <p>
                    <strong>Soft, nearly merged outlines</strong><br />
                    Identity becoming inseparable from reflection.
                </p>
                <div className="divider flex-group flex-align-center"><div></div><span></span><div></div></div>
                <h1 className="section-heading zodiac">Zodiac</h1>

                <div className="zodiac-section">
                    <section className="flex-group flex-start flex-align-center">
                        <div className="icon gemini"></div>
                        <strong>
                            20° Gemini: Adaptability, curiosity and<br/>
                            responsiveness to others.
                        </strong>
                    </section>
                    <section className="flex-group flex-start flex-align-center">
                        <div className="icon cancer"></div>
                        <strong>
                            20° Cancer: Nurture, memory, protection<br/>
                            and emotional depth.
                        </strong>
                    </section>
                </div>
            </section>
        </>
    )
}

export default TheQueenOfCups