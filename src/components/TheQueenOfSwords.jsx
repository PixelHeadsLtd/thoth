import CardSelect from './CardSelect'
import queenOfSwords from '../assets/images/cards/minor-arcana/swords/medium_qs.jpg'
import sevenOfCups from '../assets/images/cards/minor-arcana/cups/medium_7c.jpg'

import MiniTree from './MiniTree'
import Tetragrammaton from './Tetragrammaton'

function TheQueenOfSwords({ pages, activePage, changePage }) {
    return (
        <>
            <section className='left'>
                <h1 className="section-heading interpretation">Interpretation</h1>
                <p>
                    <strong>Feeling refined into clear discernment</strong><br />
                    The Queen can distinguish truth from sentiment without surrendering her grace or intelligence.
                </p>
                    Crowley presents a perceptive, independent observer with exceptional clarity, subtle judgement and a talent for expressing what others only sense. 
                <p>
                   She can indicate honest appraisal, a difficult but necessary decision or release from a misleading attachment.
                </p>
                <p>
                   Her danger is letting insight become coldness, cruelty or calculated deception. Her sword should cut away illusions, not people who fail to meet her standards. The card asks what can be understood once a painful falsehood is removed.
                </p>
                <p className="italic">
                    The Queen of Swords often signifies clear judgement, independence, difficult decisions or the need to confront an uncomfortable truth.
                </p>
                <div className="divider flex-group flex-align-center"><div></div><span></span><div></div></div>
                <h1 className="section-heading example-pairing">Example Pairing</h1>
                <div className="example-pairing-section flex-group flex-align-center">
                    <div className="card-thumbs flex-group flex-align-center">
                        <div><img src={queenOfSwords} alt="" /></div>
                        <div><img src={sevenOfCups} alt="" /></div>
                    </div>
                    <div className="card-description">
                        <strong>
                            Queen of Swords + <br />
                            Seven of Cups (Debauch)
                        </strong>
                        <div className="flex-group flex-align-center">
                            <div className="symbol venus"></div>
                            <h6>Venus (Love/Harmony) in</h6>
                        </div>
                        <div className="flex-group flex-align-center">
                            <div className="symbol scorpio"></div>
                            <h6>Scorpio (Intensity/Transformation)</h6>
                        </div>
                    </div>
                </div>
                <p>
                    <strong>Elemental dignity (Neutral) </strong><br />
                    Air and Water are neutral. The Queen's own Water can make the Seven's emotional temptations personally involving)
                </p>

                <p>
                    <strong>Astrological influence </strong><br />
                    Venus in Scorpio intensifies attraction, secrecy and the appeal of emotional excess.
                </p>

                <p>
                    <strong>Combined interpretation</strong><br />
                    Someone sees that a relationship or pleasure has become unhealthy, yet remains emotionally drawn to it. 
                </p>

                <p>
                    Clear perception alone may not make separation easy. The Queen's task is to use her sword decisively while recognising the feelings that make the choice painful.
                </p>
            </section>
            <section className='middle'>
                <div className="key flex-group flex-center">
                    <div>KEY</div>
                    <strong>
                        Intelligence, clarity, perception, independence, discernment, honesty, determination, severity, criticism, bitterness.
                    </strong>
                </div>
                <div className="cards flex-group flex-align-center flex-column">
                    <h1>Queen of Swords</h1>
                    <div className="flex-group card-mask flex-align-center">
                        <img src={queenOfSwords} alt="" />
                        <CardSelect
                            pages={pages}
                            activePage={activePage}
                            changePage={changePage}
                        />
                    </div>
                    <MiniTree />
                    <Tetragrammaton />
                </div>
                <h2 className="guide">Perceptive Judgement vs Calculated Cruelty</h2>
            </section>
            <section className='right'>
                <h1 className="section-heading element water-of-air">Water of Air</h1>
                <p>
                    Water gives Air responsiveness and flexibility. The Queen's perceptions are sharp but sensitive to context; emotional disturbance can turn discrimination into suspicion or prejudice.
                </p>
                <div className="divider flex-group flex-align-center"><div></div><span></span><div></div></div>
                <h1 className="section-heading symbolism">Symbolism</h1>
                <p>
                    <strong>Card colours and their meaning</strong><br />
                    Deep blue: Intellect, independence and mental depth.<br />
                    Violet: Insight, introspection and psychological understanding.<br />
                    White: Clarity, truth and discrimination.<br />
                    Gold: Awareness, confidence and mind illumination.
                </p>

                <p>
                    <strong>Throne upon clouds</strong><br />
                    Consciousness ruling within the realm of Air.
                </p>

                <p>
                    <strong>Naked upper body</strong><br />
                    Openness to direct perception and truth.
                </p>

                <p>
                    <strong>Gleaming belt and sarong</strong><br />
                    Discipline holding the otherwise unguarded figure.
                </p>

                <p>
                    <strong>Child's head helmet crest</strong><br />
                    Fresh perception and the emergence of a new idea.
                </p>

                <p>
                    <strong>Sharp rays of light</strong><br />
                    Mental clarity cutting through obscurity.
                </p>

                <p>
                    <strong>Sword in her right hand</strong><br />
                    Discernment, separation and lucid judgement.
                </p>

                <p>
                    <strong>Newly severed bearded head</strong><br />
                    The removal of an outworn mental authority or false idea.
                </p>
                <div className="divider flex-group flex-align-center"><div></div><span></span><div></div></div>
                <h1 className="section-heading zodiac">Zodiac</h1>

                <div className="zodiac-section">
                    <section className="flex-group flex-start flex-align-center">
                        <div className="icon virgo"></div>
                        <strong>
                            20° Virgo: Analysis, precision<br/>
                            and discrimination.
                        </strong>
                    </section>
                    <section className="flex-group flex-start flex-align-center">
                        <div className="icon libra"></div>
                        <strong>
                            20° Libra: Balance, fairness and<br/>
                            reasoned judgement.
                        </strong>
                    </section>
                </div>
            </section>
        </>
    )
}

export default TheQueenOfSwords