import CardSelect from './CardSelect'
import KnightOfCups from '../assets/images/cards/minor-arcana/cups/medium_kc.jpg'
import FiveOfWands from '../assets/images/cards/minor-arcana/wands/medium_5w.jpg'

import MiniTree from './MiniTree'
import Tetragrammaton from './Tetragrammaton'

function TheKnightOfCups({ pages, activePage, changePage }) {
    return (
        <>
            <section className='left'>
                <h1 className="section-heading interpretation">Interpretation</h1>
                <p>
                    <strong>Fire of Water creates movement</strong><br/>
                    Passion, movement and creativity within the emotional and imaginative realm.
                </p>
                    Crowley portrays the Knight as sensitive, graceful and easily inspired by attraction. 
                    He expresses feelings through romance, affection, artistic creativity and gestures of love. 
                    His enthusiasm can be powerful and sincere, though not always lasting.
                <p>
                    His deepest qualities are innocence and purity, with the ability to transform feelings into love and devotion. When weakened by surrounding influences, sensitivity can become indulgence, idleness or insincerity. He encourages emotional openness while questioning whether passion can become lasting commitment.
                </p>
                <p className="italic">
                   The Knight of Cups often signifies romantic interest, affection, creative inspiration, passionate pursuit or an emotionally meaningful offer.
                </p>
                <div className="divider flex-group flex-align-center"><div></div><span></span><div></div></div>
                <h1 className="section-heading example-pairing">Example Pairing</h1>
                <div className="example-pairing-section flex-group flex-align-center">
                    <div className="card-thumbs flex-group flex-align-center">
                        <div><img src={KnightOfCups} alt="" /></div>
                        <div><img src={FiveOfWands} alt="" /></div>
                    </div>
                    <div className="card-description">
                        <strong>
                            Knight of Cups + <br/>
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
                    <strong>Elemental dignity (Conflict)</strong><br />
                    The Five strengthens the Knight's active Fire but challenges his underlying Water, provoking action while disturbing emotional balance.
                </p>

                <p>
                    <strong>Astrological influence </strong><br />
                    Saturn in Leo introduces restriction, frustration and struggles for control, conflicting with the Knight's idealism and emotional sensitivity.
                </p>

                <p>
                    <strong>Combined interpretation</strong><br />
                    Someone pursuing an emotional ideal encounters opposition. Their fiery determination urges them to fight for what matters, but the conflict threatens their emotional equilibrium.
                </p>

                <p>
                    Progress requires balancing passionate action with patience and emotional restraint.
                </p>
            </section>
            <section className='middle'>
                <div className="key flex-group flex-center">
                    <div>KEY</div>
                    <strong>
                        Romanticism, idealism, imagination, sensitivity, compassion, intuition, creativity, charm, moodiness, impracticality.
                    </strong>
                </div>
                <div className="cards flex-group flex-align-center flex-column">
                    <h1>Knight of Cups</h1>

                    <div className="flex-group card-mask flex-align-center">
                        <img src={KnightOfCups} alt="" />
                        <CardSelect
                            pages={pages}
                            activePage={activePage}
                            changePage={changePage}
                        />
                    </div>
                    <MiniTree />
                    <Tetragrammaton />
                </div>
                <h2 className="guide">Romantic Enthusiasm vs Shallow Affection</h2>
            </section>
            <section className='right'>
                <h1 className="section-heading element fire-of-water">Fire of Water</h1>
                <p>
                    Passion animates feeling but can disturb its natural calm. Fire (Knight) brings initiating will, energy and action; Water (Cups) governs feeling, imagination, relation and receptivity.
                </p>
                <div className="divider flex-group flex-align-center"><div></div><span></span><div></div></div>
                <h1 className="section-heading symbolism">Symbolism</h1>
                <p>
                    <strong>Card colours and their meaning</strong><br />
                    Pale blue: Emotional sensitivity, imagination and receptivity.<br />
                    Deep blue: Emotional depth, mystery, intuition.<br />
                    Silver-white: Innocence, purity and reflective awareness.<br />
                    Dark green-brown: Concealed intensity beneath a <br />
                    graceful exterior.
                </p>

                <p>
                    <strong>White horse leaping forward</strong><br />
                    The energetic surge of Water under Fire’s influence.
                </p>

                <p>
                    <strong>Green armour</strong><br />
                    Creative expression of deep emotions, transforming feelings into meaningful offerings of love and affection.
                </p>

                <p>
                    <strong>Bright wings on armour</strong><br />
                    Rapid movement and an unusually active emotional nature.
                </p>

                <p>
                    <strong>Raised cup</strong><br />
                    The vessel of feelings and receptivity carried into action.
                </p>

                <p>
                    <strong>Crab emerging from the cup</strong><br />
                    Cancer’s cardinal water and an assertive, grasping motion.
                </p>

                <p>
                    <strong>Peacock totem</strong><br />
                    Beauty, brilliance and the iridescent quality of active Water.
                </p>

                <p>
                    <strong>Great water-blue sweeping forms</strong><br />
                    A surrounding emotional current given force and speed.
                </p>
                <div className="divider flex-group flex-align-center"><div></div><span></span><div></div></div>
                <h1 className="section-heading zodiac">Zodiac</h1>

                <div className="zodiac-section">
                    <section className="flex-group flex-start flex-align-center">
                        <div className="icon aquarius"></div>
                        <strong>
                            20° Aquarius: Independence,<br />
                            originality and idealism.
                        </strong>
                    </section>
                    <section className="flex-group flex-start flex-align-center">
                        <div className="icon pisces"></div>
                        <strong>
                            20° Pisces: Intuition, compassion<br />
                            and emotional sensitivity.
                        </strong>
                    </section>
                </div>
            </section>
        </>
    )
}

export default TheKnightOfCups