import CardSelect from './CardSelect'
import knightOfSwords from '../assets/images/cards/minor-arcana/swords/medium_ks.jpg'
import fiveOfDisks from '../assets/images/cards/minor-arcana/disks/medium_5d.jpg'

import MiniTree from './MiniTree'
import Tetragrammaton from './Tetragrammaton'

function TheKnightOfSwords({ pages, activePage, changePage }) {
    return (
        <>
            <section className='left'>
                <h1 className="section-heading interpretation">Interpretation</h1>
                <p>
                    <strong>The storm of inspired thought</strong><br/>
                    The Knight acts with intellectual speed, skill and remarkable courage.
                </p>
                    Crowley portrays an intense, clever and aggressive figure driven by an idea that arrives like sudden inspiration. He can cut through hesitation, confront a problem quickly and act while others are still considering their options.
                <p>
                    But the same speed can become a liability. He may attack without reflection, mistake urgency for truth or abandon his purpose when resisted. 
                </p>
                <p>
                   The card asks whether his swift intelligence is guided by a lasting conviction or merely by the force of the latest thought.
                </p>
                <p className="italic">
                    The Knight of Swords often signifies sudden developments, confrontations, decisive action or the forceful pursuit<br/> of an idea.
                </p>
                <div className="divider flex-group flex-align-center"><div></div><span></span><div></div></div>
                <h1 className="section-heading example-pairing">Example Pairing</h1>
                <div className="example-pairing-section flex-group flex-align-center">
                    <div className="card-thumbs flex-group flex-align-center">
                        <div><img src={knightOfSwords} alt="" /></div>
                        <div><img src={fiveOfDisks} alt="" /></div>
                    </div>
                    <div className="card-description">
                        <strong>
                            Knight of Swords + <br />
                            Five of Disk (Worry)
                        </strong>
                        <div className="flex-group flex-align-center">
                            <div className="symbol mercury"></div>
                            <h6>Mercury (Intellect/Communication) in</h6>
                        </div>
                        <div className="flex-group flex-align-center">
                            <div className="symbol taurus"></div>
                            <h6>Taurus (Stability/Persistence)</h6>
                        </div>
                    </div>
                </div>
                <p>
                    <strong>Elemental dignity (Conflict) </strong><br />
                    Air and Earth oppose one another. The Knight wants an immediate solution; the Five confronts him with stubborn material limitations)
                </p>

                <p>
                    <strong>Astrological influence </strong><br />
                    Mercury in Taurus focuses worry on money, security, resources and practical details.
                </p>

                <p>
                    <strong>Combined interpretation</strong><br />
                    Someone is trying to think or argue their way out of a concrete difficulty. 
                </p>

                <p>
                    Brilliant plans may fail if they ignore cost, time or physical constraints. The useful response is to slow down, check the facts and develop a practical sequence of actions.
                </p>
            </section>
            <section className='middle'>
                <div className="key flex-group flex-center">
                    <div>KEY</div>
                    <strong>
                        Intelligence, courage, swiftness, ingenuity, decisiveness, determination, impulsiveness, aggression, recklessness.
                    </strong>
                </div>
                <div className="cards flex-group flex-align-center flex-column">
                    <h1>Knight of Swords</h1>
                    <div className="flex-group card-mask flex-align-center">
                        <img src={knightOfSwords} alt="" />
                        <CardSelect
                            pages={pages}
                            activePage={activePage}
                            changePage={changePage}
                        />
                    </div>
                    <MiniTree />
                    <Tetragrammaton />
                </div>
                <h2 className="guide">Fast Acting vs Hot Air</h2>
            </section>
            <section className='right'>
                <h1 className="section-heading element fire-of-air">Fire of Air</h1>
                <p>
                    Fire ignites Air into a storm. Thought becomes attack, argument and decisive movement; when badly directed, the initial brilliance disperses as quickly as it arrived.
                </p>
                <div className="divider flex-group flex-align-center"><div></div><span></span><div></div></div>
                <h1 className="section-heading symbolism">Symbolism</h1>
                <p>
                    <strong>Card colours and their meaning</strong><br />
                    Golden yellow: Intellectual energy, alertness, rapid thought.<br />
                    Blue: Turbulence, movement and the restless force of Air.<br />
                    White: Clarity, freedom and the swiftness of thought.<br />
                    Green: Ingenuity, adaptability and mental resourcefulness.
                </p>

                <p>
                    <strong>Maddened horse</strong><br />
                    The unrestrained speed of an inspired mind.
                </p>

                <p>
                    <strong>Revolving wing as helmet crest</strong><br />
                    Thought in ceaseless, rapid motion.
                </p>

                <p>
                    <strong>Sword raised in one hand with poniard in the other</strong><br />
                    The principal thrust of reason and attack.
                    Precision and a second means of striking.
                </p>

                <p>
                    <strong>Armoured warrior</strong><br />
                    Will harnessed to an intellectual mission.
                </p>

                <p>
                    <strong>Descent through the sky</strong><br />
                    The force of a tempest breaking into events.
                </p>

                <p>
                    <strong>Wind and storm forms</strong><br />
                    Air violently activated by Fire.
                </p>

                <p>
                    <strong>Three swallows</strong><br />
                    Swift thought, intellectual freedom and communication; 
                    reflecting the Knight's restless, energetic mind.
                </p>
                <div className="divider flex-group flex-align-center"><div></div><span></span><div></div></div>
                <h1 className="section-heading zodiac">Zodiac</h1>

                <div className="zodiac-section">
                    <section className="flex-group flex-start flex-align-center">
                        <div className="icon taurus"></div>
                        <strong>
                            20° Taurus: Steadiness, determination<br />
                            and resistance to change.
                        </strong>
                    </section>
                    <section className="flex-group flex-start flex-align-center">
                        <div className="icon gemini"></div>
                        <strong>
                            20° Gemini: Quick thinking, curiosity<br />
                            and verbal agility.
                        </strong>
                    </section>
                </div>
            </section>
        </>
    )
}

export default TheKnightOfSwords