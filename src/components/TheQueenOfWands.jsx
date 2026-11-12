import CardSelect from './CardSelect'
import queenOfWands from '../assets/images/cards/minor-arcana/wands/medium_qw.jpg'
import eightOfCups from '../assets/images/cards/minor-arcana/cups/medium_8c.jpg'

import MiniTree from './MiniTree'
import Tetragrammaton from './Tetragrammaton'

function TheQueenOfWands({ pages, activePage, changePage }) {
    return (
        <>
            <section className='left'>
                <h1 className="section-heading interpretation">Interpretation</h1>
                <p>
                    <strong>Passion guided by presence and control</strong><br />
                    The Queen embodies Fire made responsive, attractive<br/>and enduring.

                </p>
                    Crowley describes a commanding, adaptable, warm and generous personality, capable of loyalty and affection while insisting on acting on her own terms. She draws others through confidence rather than sheer force.
                <p>
                   When unbalanced, pride becomes vanity, confidence hardens into stubbornness and offence can turn<br/>into resentment. 
                </p>
                <p>
                    She asks whether strength is being exercised with self-awareness, or used to make others submit to her wishes.
                </p>
                <p className="italic">
                    The Queen of Wands often signifies confident leadership, independence, personal magnetism or taking control<br/>of a situation.
                </p>
                <div className="divider flex-group flex-align-center"><div></div><span></span><div></div></div>
                <h1 className="section-heading example-pairing">Example Pairing</h1>
                <div className="example-pairing-section flex-group flex-align-center">
                    <div className="card-thumbs flex-group flex-align-center">
                        <div><img src={queenOfWands} alt="" /></div>
                        <div><img src={eightOfCups} alt="" /></div>
                    </div>
                    <div className="card-description">
                        <strong>
                            Queen of Wands + <br />
                            Eight of Cups (Indolence)
                        </strong>
                        <div className="flex-group flex-align-center">
                            <div className="symbol saturn"></div>
                            <h6>Saturn (Restriction/Discipline) in</h6>
                        </div>
                        <div className="flex-group flex-align-center">
                            <div className="symbol pisces"></div>
                            <h6>Pisces (Sensitivity/Idealism)</h6>
                        </div>
                    </div>
                </div>
                <p>
                    <strong>Elemental dignity (Conflict) </strong><br />
                    Water weakens Fire. The Queen's watery rank can understand withdrawal, but her fiery suit resists stagnation.
                </p>

                <p>
                    <strong>Astrological influence </strong><br />
                    Saturn in Pisces suggests emotional fatigue, disillusionment and difficulty sustaining desire.
                </p>

                <p>
                    <strong>Combined interpretation</strong><br />
                    A capable, magnetic person is trying to keep a relationship or project alive after its emotional energy has ebbed. Pressing others for enthusiasm may increase the distance. 
                </p>

                <p>
                    She needs to distinguish a passing low mood from something that has genuinely run its course.
                </p>
            </section>
            <section className='middle'>
                <div className="key flex-group flex-center">
                    <div>KEY</div>
                    <strong>
                        Courage, warmth, generosity, passion, confidence, adaptability, authority, determination, pride, vengefulness.
                    </strong>
                </div>
                <div className="cards flex-group flex-align-center flex-column">
                    <h1>Queen of Wands</h1>
                    <div className="flex-group card-mask flex-align-center">
                        <img src={queenOfWands} alt="" />
                        <CardSelect
                            pages={pages}
                            activePage={activePage}
                            changePage={changePage}
                        />
                    </div>
                    <MiniTree />
                    <Tetragrammaton />
                </div>
                <h2 className="guide">Calm Authority vs Vindictive Pride</h2>
            </section>
            <section className='right'>
                <h1 className="section-heading element water-of-fire">Water of Fire</h1>
                <p>
                    Water gives Fire shape, receptivity and sustained expression. She can channel enthusiasm into a lasting influence, but her emotions can either soothe the blaze or feed a grudge.
                </p>
                <div className="divider flex-group flex-align-center"><div></div><span></span><div></div></div>
                <h1 className="section-heading symbolism">Symbolism</h1>
                <p>
                    <strong>Card colours and their meaning</strong><br />
                    Orange: Passion, emotional intensity and fiery determination.<br />
                    Gold: Charisma, generosity, confidence and authority.<br />
                    Yellow: Vitality, warmth and radiant creative energy.
                </p>

                <p>
                    <strong>Crown with winged globe</strong><br />
                    Authority expanded through animated, fiery intelligence.
                </p>

                <p>
                    <strong>Flame-coloured hair</strong><br />
                    Vitality and passion flowing from the figure.
                </p>

                <p>
                    <strong>Scaled armour</strong><br />
                    Strength moderated by a responsive, protective surface.
                </p>

                <p>
                    <strong>Throne of ordered flame</strong><br />
                    Wild energy held within a stable form.
                </p>

                <p>
                    <strong>Cone-tipped wand</strong><br />
                    Creative potency and the Bacchic mysteries: initiation rites involving ecstasy, intoxication and spiritual transformation.
                </p>

                <p>
                    <strong>Crouching leopard</strong><br />
                    Fierce instinct made obedient to her touch. Its spots symbolise the darkness of her past and her transformation.
                </p>

                <p>
                    <strong>Her hand on the leopard</strong><br />
                    Authority exercised through composure rather than pursuit.
                </p>
                <div className="divider flex-group flex-align-center"><div></div><span></span><div></div></div>
                <h1 className="section-heading zodiac">Zodiac</h1>

                <div className="zodiac-section">
                    <section className="flex-group flex-start flex-align-center">
                        <div className="icon pisces"></div>
                        <strong>
                            20° Pisces: Imagination, emotional<br/>
                            openness and sensitivity.
                        </strong>
                    </section>
                    <section className="flex-group flex-start flex-align-center">
                        <div className="icon aries"></div>
                        <strong>
                            20° Aries: Independence,<br/>
                            courage and a will to initiate.
                        </strong>
                    </section>
                </div>
            </section>
        </>
    )
}

export default TheQueenOfWands