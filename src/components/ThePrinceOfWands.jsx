import CardSelect from './CardSelect'
import princeOfWands from '../assets/images/cards/minor-arcana/wands/medium_pw.jpg'
import eightOfSwords from '../assets/images/cards/minor-arcana/swords/medium_8s.jpg'

import MiniTree from './MiniTree'
import Tetragrammaton from './Tetragrammaton'

function ThePrinceOfWands({ pages, activePage, changePage }) {
    return (
        <>
            <section className='left'>
                <h1 className="section-heading interpretation">Interpretation</h1>
                <p>
                    <strong>Fire expressed through intellect and movement</strong><br />
                    The Prince is inventive, bold and charismatic, with the power to turn enthusiasm into far-reaching action.
                </p>
                    Crowley portrays a generous, courageous and romantic personality whose mind can see opposing sides, even while his speech sounds uncompromising. 
                <p>
                    He can achieve a great deal through persistence, work and sheer ambition.
                </p>
                <p>
                    His difficulty is inconsistency. He may argue passionately before deciding what he truly believes, or become proud of an image he cannot sustain. 
                </p>
                <p>
                    The card asks whether impressive energy has acquired a coherent direction.
                </p>
                <p className="italic">
                    The Prince of Wands often signifies ambitious plans, creative inspiration, adventurous undertakings or enthusiastic progress.
                </p>
                <div className="divider flex-group flex-align-center"><div></div><span></span><div></div></div>
                <h1 className="section-heading example-pairing">Example Pairing</h1>
                <div className="example-pairing-section flex-group flex-align-center">
                    <div className="card-thumbs flex-group flex-align-center">
                        <div><img src={princeOfWands} alt="" /></div>
                        <div><img src={eightOfSwords} alt="" /></div>
                    </div>
                    <div className="card-description">
                        <strong>
                            Prince of Wands + <br />
                            Eight of Swords (Interference)
                        </strong>
                        <div className="flex-group flex-align-center">
                            <div className="symbol jupiter"></div>
                            <h6>Jupiter (Expansion/Opportunity) in</h6>
                        </div>
                        <div className="flex-group flex-align-center">
                            <div className="symbol gemini"></div>
                            <h6>Gemini (Curiosity/Adaptability)</h6>
                        </div>
                    </div>
                </div>
                <p>
                    <strong>Elemental dignity (Support) </strong><br />
                    Air strengthens Fire. Ideas may multiply rapidly. Yet the Eight's meaning shows that mental activity can still obstruct progress.
                </p>

                <p>
                    <strong>Astrological influence </strong><br />
                    Jupiter in Gemini amplifies competing opinions, detail and distraction.
                </p>

                <p>
                    <strong>Combined interpretation</strong><br />
                    An energetic person has several exciting possibilities but cannot choose a course. More discussion creates further branches rather than a decision. 
                </p>

                <p>
                    The problem is not lack of inspiration, but failure to concentrate it into one workable plan.
                </p>
            </section>
            <section className='middle'>
                <div className="key flex-group flex-center">
                    <div>KEY</div>
                    <strong>
                        Courage, creativity, vitality, enthusiasm, intelligence, generosity, confidence, impulsiveness, arrogance.
                    </strong>
                </div>
                <div className="cards flex-group flex-align-center flex-column">
                    <h1>Prince of Wands</h1>
                    <div className="flex-group card-mask flex-align-center">
                        <img src={princeOfWands} alt="" />
                        <CardSelect
                            pages={pages}
                            activePage={activePage}
                            changePage={changePage}
                        />
                    </div>
                    <MiniTree />
                    <Tetragrammaton />
                </div>
                <h2 className="guide">Noble Courage vs Empty Boasting</h2>
            </section>
            <section className='right'>
                <h1 className="section-heading element air-of-fire">Air of Fire</h1>
                <p>
                    Air expands and spreads Fire, bringing mobility, ideas and communication to creative ambition. This can produce inspiration on a grand scale, or activity scattered by changing opinions.
                </p>
                <div className="divider flex-group flex-align-center"><div></div><span></span><div></div></div>
                <h1 className="section-heading symbolism">Symbolism</h1>
                <p>
                    <strong>Card colours and their meaning</strong><br />
                    Orange-red: Courage, passion and energetic ambition.<br />
                    Gold: Confidence, pride and personal power.<br />
                    Yellow: Inspiration, vitality and expansive creative thought.<br />
                    Dark brown: Strength, intensity, force of determined action.<br />
                    Green: Intuitive creativity, renewal and emerging potential.
                </p>

                <p>
                    <strong>Lion drawing the chariot</strong><br />
                    Fiery strength harnessed to a moving purpose.
                </p>

                <p>
                    <strong>Winged lion crest</strong><br />
                    Courage raised into imagination and swift thought.
                </p>

                <p>
                    <strong>Scaled armour and bare arms</strong><br />
                    Protection combined with direct, vigorous action.
                </p>

                <p>
                    <strong>Phoenix wand</strong><br />
                    Renewal and power emerging from consuming fire.
                </p>

                <p>
                    <strong>Flame-radiating wheel</strong><br />
                    Motion driven by the same force the Prince directs.
                </p>

                <p>
                    <strong>Sea of flame</strong><br />
                    An environment of ceaseless creative stimulation.
                </p>

                <p>
                    <strong>Sigil upon the breast</strong><br />
                    Crowley's emblem of The Great Beast, linking the Prince to Thelemic force.
                </p>
                <div className="divider flex-group flex-align-center"><div></div><span></span><div></div></div>
                <h1 className="section-heading zodiac">Zodiac</h1>

                <div className="zodiac-section">
                    <section className="flex-group flex-start flex-align-center">
                        <div className="icon cancer"></div>
                        <strong>
                            20° Cancer: Loyalty, protectiveness and <br />
                            feeling beneath action.
                        </strong>
                    </section>
                    <section className="flex-group flex-start flex-align-center">
                        <div className="icon leo"></div>
                        <strong>
                            20° Leo: Confidence, generosity and <br />
                            dramatic self-expression.
                        </strong>
                    </section>
                </div>
            </section>
        </>
    )
}

export default ThePrinceOfWands