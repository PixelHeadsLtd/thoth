import CardSelect from './CardSelect'
import queenOfDisks from '../assets/images/cards/minor-arcana/disks/medium_qd.jpg'
import fiveOfWands from '../assets/images/cards/minor-arcana/wands/medium_5w.jpg'

import MiniTree from './MiniTree'
import Tetragrammaton from './Tetragrammaton'

function TheQueenOfDisks({ pages, activePage, changePage }) {
    return (
        <>
            <section className='left'>
                <h1 className="section-heading interpretation">Interpretation</h1>
                <p>
                    <strong>The nurturing intelligence of Earth</strong><br />
                    The Queen is generous, patient and concerned with making life secure, fertile and sustainable.
                </p>
                    Crowley presents a practical, affectionate personality whose intuition guides her towards useful work and quiet achievement. 
                <p>
                   She can represent care for home, health, resources or a long-term undertaking that must be cultivated rather than forced.
                </p>
                <p>
                   Her danger is becoming trapped in duty, comfort or repetitive material concerns. 
                </p>
                <p>
                    She asks whether care is enabling new growth, or merely maintaining a familiar arrangement because change feels unsettling.
                </p>
                <p className="italic">
                    The Queen of Disks often signifies nurturing, domestic stability, financial security or the practical care of others.
                </p>
                <div className="divider flex-group flex-align-center"><div></div><span></span><div></div></div>
                <h1 className="section-heading example-pairing">Example Pairing</h1>
                <div className="example-pairing-section flex-group flex-align-center">
                    <div className="card-thumbs flex-group flex-align-center">
                        <div><img src={queenOfDisks} alt="" /></div>
                        <div><img src={fiveOfWands} alt="" /></div>
                    </div>
                    <div className="card-description">
                        <strong>
                            Queen of Disks + <br />
                            Five of Wands (Strife)
                        </strong>
                        <div className="flex-group flex-align-center">
                            <div className="symbol saturn"></div>
                            <h6>Saturn (Restriction/Discipline) in</h6>
                        </div>
                        <div className="flex-group flex-align-center">
                            <div className="symbol leo"></div>
                            <h6>Leo (Pride/Confidence)</h6>
                        </div>
                    </div>
                </div>
                <p>
                    <strong>Elemental dignity (Conflict) </strong><br />
                    Fire presses upon Earth. The Queen's watery rank seeks calm while the Five introduces confrontation.
                </p>

                <p>
                    <strong>Astrological influence </strong><br />
                    Saturn in Leo suggests frustration around authority, recognition or competing wills.
                </p>

                <p>
                    <strong>Combined interpretation</strong><br />
                    Someone maintaining a stable home, team or enterprise is drawn into a contest of egos. Their usual patience is tested by demands that cannot all be satisfied. 
                </p>

                <p>
                    The sensible response is to establish fair limits and protect what is productive, without trying to control every disagreement.
                </p>
            </section>
            <section className='middle'>
                <div className="key flex-group flex-center">
                    <div>KEY</div>
                    <strong>
                        Kindness, generosity, affection, intuition, practicality, patience, diligence, sensuality, complacency, servility.
                    </strong>
                </div>
                <div className="cards flex-group flex-align-center flex-column">
                    <h1>Queen of Disks</h1>
                    <div className="flex-group card-mask flex-align-center">
                        <img src={queenOfDisks} alt="" />
                        <CardSelect
                            pages={pages}
                            activePage={activePage}
                            changePage={changePage}
                        />
                    </div>
                    <MiniTree />
                    <Tetragrammaton />
                </div>
                <h2 className="guide">Practical Nurturing vs Mechanical Drudgery</h2>
            </section>
            <section className='right'>
                <h1 className="section-heading element water-of-earth">Water of Earth</h1>
                <p>
                    Water softens and nourishes Earth. The Queen receives, cultivates and sustains; she shows how emotion becomes care and practical support. Excess can turn nurture into dependence or stagnation.
                </p>
                <div className="divider flex-group flex-align-center"><div></div><span></span><div></div></div>
                <h1 className="section-heading symbolism">Symbolism</h1>
                <p>
                    <strong>Card colours and their meaning</strong><br />
                    Dark brown: Grounding, endurance and experience.<br />
                    Ochre: Fertility, nourishment, richness of the natural world.<br />
                    Gold: Abundance, prosperity and material fulfilment.<br />
                    Black: Strength, protection and earthly forces.
                </p>

                <p>
                    <strong>Pineapple throne</strong><br />
                    Fertility, abundance and the rewards of sustained effort.
                </p>

                <p>
                    <strong>River winding through desert</strong><br />
                    The long, difficult journey she looks back upon.
                </p>

                <p>
                    <strong>Oases beginning to appear</strong><br />
                    Hardship giving way to renewal and prosperity.
                </p>

                <p>
                    <strong>Goat standing on a sphere</strong><br />
                    Material resilience and the fertility of creation.
                </p>

                <p>
                    <strong>Markhor horned helmet</strong><br />
                    Heightened perception, clarity and intuitive awareness.
                </p>

                <p>
                    <strong>Coin-like scaled armour</strong><br />
                    Protection through tangible resources.
                </p>

                <p>
                    <strong>Cube-topped sceptre and interlaced disk</strong><br />
                    Matter organised into creative structure and continuity.
                </p>
                <div className="divider flex-group flex-align-center"><div></div><span></span><div></div></div>
                <h1 className="section-heading zodiac">Zodiac</h1>

                <div className="zodiac-section">
                    <section className="flex-group flex-start flex-align-center">
                        <div className="icon sagittarius"></div>
                        <strong>
                            20° Sagittarius: Vision, generosity and <br/>
                            the hope of expansion.
                        </strong>
                    </section>
                    <section className="flex-group flex-start flex-align-center">
                        <div className="icon capricorn"></div>
                        <strong>
                            20° Capricorn: Responsibility, endurance<br/>
                            and material stewardship.
                        </strong>
                    </section>
                </div>
            </section>
        </>
    )
}

export default TheQueenOfDisks