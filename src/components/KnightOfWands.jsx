import knightOfWands from '../assets/images/cards/minor-arcana/wands/medium_kw.jpg'
import fiveOfCups from '../assets/images/cards/minor-arcana/cups/medium_5c.jpg'

import MiniTree from '../components/MiniTree'
import Tetragrammaton from '../components/Tetragrammaton'

function KnightOfWands() {
    return (
        <>
            <section className='left'>
                <h1 className="section-heading interpretation">Interpretation</h1>
                <p>
                    <strong>The first surge of pure Fire</strong><br />
                    Initiative, bravery, fierce generosity and the power to launch an undertaking.
                </p>
                Crowley describes a person who is swift, proud and unpredictable, able to act with extraordinary intensity but less able to adapt once the first assault fails.
                <p>
                    In a reading this card can indicate passionate leadership, sudden action or an urgent creative drive.
                </p>
                <p>
                    <strong>
                        Its warning is that courage without judgement can become brutality, fanaticism or reckless expenditure of energy.
                    </strong>
                </p>
                <p>
                    The question is not whether there is enough force, but whether there is a clear purpose to direct it.
                </p>
                <p className="italic">
                    The Knight of Wands often signifies bold action, passionate pursuits, sudden opportunities or an exciting adventure.
                </p>
                <div className="divider flex-group flex-align-center"><div></div><span></span><div></div></div>
                <h1 className="section-heading example-pairing">Example Pairing</h1>
                <div className="example-pairing-section flex-group flex-align-center">
                    <div className="card-thumbs flex-group flex-align-center">
                        <div><img src={knightOfWands} alt="" /></div>
                        <div><img src={fiveOfCups} alt="" /></div>
                    </div>
                    <div className="card-description">
                        <strong>
                            Knight of Wands + <br />
                            Five of Cups (Disappointment)
                        </strong>
                        <div className="flex-group flex-align-center">
                            <div className="symbol mars"></div>
                            <h6>Mars (Drive/Conflict) in</h6>
                        </div>
                        <div className="flex-group flex-align-center">
                            <div className="symbol scorpio"></div>
                            <h6>Scorpio (Intensity/Transformation)</h6>
                        </div>
                    </div>
                </div>
                <p>
                    <strong>Elemental dignity (Conflict) </strong><br />
                    Water weakens Fire, potentially frustrating the Knight's natural drive and enthusiasm.
                </p>

                <p>
                    <strong>Astrological influence </strong><br />
                    The Five of Cups is Mars in Scorpio. Mars introduces aggression and determination, while Scorpio adds emotional intensity and the possibility of painful transformation.
                </p>

                <p>
                    <strong>Combined interpretation</strong><br />
                    Someone is determined to push forward despite an emotional setback. Their impulsive approach may actually be worsening the disappointment.
                </p>

                <p>
                    Progress requires acknowledging the emotional consequences rather than simply applying more force.
                </p>
            </section>
            <section className='middle'>
                <div className="key flex-group flex-center">
                    <div>KEY</div>
                    <strong>
                        Courage, bravery, generosity, initiative, passion, swiftness,
                        pride, leadership, ambition, impulsiveness, volatility.
                    </strong>
                </div>
                <div className="cards flex-group flex-align-center flex-column">
                    <h1>Knight of Wands</h1>
                    <div className="flex-group card-mask flex-align-center">
                        <img src={knightOfWands} alt="" />
                    </div>
                    <MiniTree />
                    <Tetragrammaton />
                </div>
                <h2 className="guide">Bold Initiative vs Reckless Aggression</h2>
            </section>
            <section className='right'>
                <h1 className="section-heading element fire-of-fire">Fire of Fire</h1>
                <p>
                    The rank intensifies the suit, initiative becomes almost pure combustion.
                    Fire (Knight) brings initiating will, energy and action. Fire (Wands)
                    governs will, courage, passion and creative energy.
                </p>
                <div className="divider flex-group flex-align-center"><div></div><span></span><div></div></div>
                <h1 className="section-heading symbolism">Symbolism</h1>
                <p>
                    <strong>Card colours and their meaning</strong><br />
                    Orange-red: Explosive energy, passion and fierce determination.
                    Orange: Enthusiasm, ambition and unstoppable momentum.
                    Golden yellow: Vitality, confidence and creative power.
                    Black: Fierceness and uncompromising strength.
                </p>

                <p>
                    <strong>Black leaping horse</strong><br />
                    Unstoppable, explosive movement; Fire refusing to remain still.
                </p>

                <p>
                    <strong>Flaming torch</strong><br />
                    Ignition of events and creative will.
                </p>

                <p>
                    <strong>Warrior in full armour</strong><br />
                    A martial, confrontational expression of fiery energy.
                </p>

                <p>
                    <strong>Black horse helmet crest </strong><br />
                    Reinforces the card’s animal power and momentum.
                </p>

                <p>
                    <strong>Flame-like mantle</strong><br />
                    The rider is wrapped in the very element he commands.
                </p>

                <p>
                    <strong>Fire beneath the horse</strong><br />
                    Activity unfolding within a field of pure flame.
                </p>

                <p>
                    <strong>Upward and forward thrust</strong><br />
                    The force of immediate action, difficult to recall.
                </p>
                <div className="divider flex-group flex-align-center"><div></div><span></span><div></div></div>
                <h1 className="section-heading zodiac">Zodiac</h1>

                <div className="zodiac-section">
                    <section className="flex-group flex-start flex-align-center">
                        <div className="icon scorpio"></div>
                        <strong>
                            20° Scorpio: Intensity,<br />
                            passion and determination.
                        </strong>
                    </section>
                    <section className="flex-group flex-start flex-align-center">
                        <div className="icon sagittarius"></div>
                        <strong>
                            20° Sagittarius: Enthusiasm,<br />
                            action and impulsiveness.
                        </strong>
                    </section>
                </div>
            </section>
        </>
    )
}

export default KnightOfWands