import CardSelect from './CardSelect'
import knightOfDisks from '../assets/images/cards/minor-arcana/disks/medium_kd.jpg'
import eightOfSwords from '../assets/images/cards/minor-arcana/swords/medium_8s.jpg'

import MiniTree from './MiniTree'
import Tetragrammaton from './Tetragrammaton'

function TheKnightOfDisks({ pages, activePage, changePage }) {
    return (
        <>
            <section className='left'>
                <h1 className="section-heading interpretation">Interpretation</h1>
                <p>
                    <strong>The hidden fire of patient growth</strong><br />
                    The Knight embodies hard work, endurance and the ability to produce something nourishing and durable.
                </p>
                    Crowley portrays a short, sturdy figure in heavy armour whose strength comes from instinct, perseverance and practical labour rather than intellect.
                <p>
                    He may signify reliability, responsibility or sustained effort. His armour can also suggest someone weighed down by obligations.
                </p>
                <p>
                    His greatest limitation is inertia. Patience becomes stagnation, while determination hardens into stubbornness and resistance to change.
                </p>
                <p>
                    The card asks whether effort produces genuine growth or merely preserves familiar routines.
                </p>
                <p className="italic">
                    The Knight of Disks often signifies steady progress, hard work, perseverance or the weight of responsibility.
                </p>
                <div className="divider flex-group flex-align-center"><div></div><span></span><div></div></div>
                <h1 className="section-heading example-pairing">Example Pairing</h1>
                <div className="example-pairing-section flex-group flex-align-center">
                    <div className="card-thumbs flex-group flex-align-center">
                        <div><img src={knightOfDisks} alt="" /></div>
                        <div><img src={eightOfSwords} alt="" /></div>
                    </div>
                    <div className="card-description">
                        <strong>
                            Knight of Disks + <br />
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
                    <strong>Elemental dignity (Conflict) </strong><br />
                    Earth resists Air's scattered movement, while the Knight's inner Fire can be excited by restless ideas.
                </p>

                <p>
                    <strong>Astrological influence </strong><br />
                    Jupiter in Gemini multiplies options, analysis and competing instructions.
                </p>

                <p>
                    <strong>Combined interpretation</strong><br />
                    A capable worker is being slowed by excessive advice, procedures or conflicting information. 
                </p>

                <p>
                    The temptation is to reject every change and retreat into habit. Progress requires choosing what is genuinely useful and returning to one steady, achievable task.
                </p>
            </section>
            <section className='middle'>
                <div className="key flex-group flex-center">
                    <div>KEY</div>
                    <strong>
                        Patience, endurance, diligence, reliability, practicality, stability, persistence, productivity, stubbornness, dullness.
                    </strong>
                </div>
                <div className="cards flex-group flex-align-center flex-column">
                    <h1>Knight of Disks</h1>
                    <div className="flex-group card-mask flex-align-center">
                        <img src={knightOfDisks} alt="" />
                        <CardSelect
                            pages={pages}
                            activePage={activePage}
                            changePage={changePage}
                        />
                    </div>
                    <MiniTree />
                    <Tetragrammaton />
                </div>
                <h2 className="guide">Patient Endurance vs Stubborn Inertia</h2>
            </section>
            <section className='right'>
                <h1 className="section-heading element fire-of-earth">Fire of Earth</h1>
                <p>
                    Fire works within Earth like warmth in soil or the energy of growth. The result is slow, concentrated productivity, not the spectacular blaze of the Wands Knight.
                </p>
                <div className="divider flex-group flex-align-center"><div></div><span></span><div></div></div>
                <h1 className="section-heading symbolism">Symbolism</h1>
                <p>
                    <strong>Card colours and their meaning</strong><br />
                    Dark brown: Stability, endurance and practicality.<br />
                    Burgundy: Determination, restrained energy and persistence.<br />
                    Ochre: Fertility, productive labour, gradual material growth.<br />
                    Yellow: Harvest, prosperity and rewards of sustained effort.
                </p>

                <p>
                    <strong>Stationary shire horse</strong><br />
                    Steadiness; all four feet are firmly planted.
                </p>

                <p>
                    <strong>Short, sturdy figure in heavy plate armour</strong><br />
                    Strength and endurance, but also burdensome responsibilities and restricted freedom.
                </p>

                <p>
                    <strong>Stag-crested, thrown-back helmet</strong><br />
                    Vitality subordinated to practical labour.
                </p>

                <p>
                    <strong>Flail</strong><br />
                    Agriculture, harvest and the effort needed for nourishment.
                </p>

                <p>
                    <strong>Solid disk</strong><br />
                    Food, sustenance and dependable material value.
                </p>

                <p>
                    <strong>Fertile fields</strong><br />
                    Earth actively producing life.
                </p>

                <p>
                    <strong>Cultivated hills</strong><br />
                    Growth extending beyond the immediate foreground.
                </p>
                <div className="divider flex-group flex-align-center"><div></div><span></span><div></div></div>
                <h1 className="section-heading zodiac">Zodiac</h1>

                <div className="zodiac-section">
                    <section className="flex-group flex-start flex-align-center">
                        <div className="icon leo"></div>
                        <strong>
                            20° Leo: Pride in work, vitality<br/>
                            and creative determination.
                        </strong>
                    </section>
                    <section className="flex-group flex-start flex-align-center">
                        <div className="icon virgo"></div>
                        <strong>
                            20° Virgo: Practical skill, cultivation<br/>
                            and attention to detail.
                        </strong>
                    </section>
                </div>
            </section>
        </>
    )
}

export default TheKnightOfDisks