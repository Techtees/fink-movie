import React,{Component} from 'react';
import movieImg from './../images/movie-poster.svg';
import netflixIcon from './../images/button-icon-text.svg';
import imdbIcon from './../images/imdb-icon.svg';
import Button from '../shared/button';
import { c2 } from '../shared/style';
import authorOne from './../images/author-1.svg';
import authorTwo from './../images/author-2.svg'
import authorThree from './../images/author-3.svg'
import authorFour from './../images/author-4.svg'



class Movies extends Component {
    state = { 
        movieDetails:['10/25/2019','Comedy, Crime','1h 52m','Play Trailer'],
        author:[ 
            {name:'Ali Atay',title:'Director, Writer'},
            {name:'Aziz Kedi',title:'Writer'},
            {name:'Feyyaz Yiğit',title:'Writer'},
        ],
        otherAuthors:[
            {name:'Uğur Yücel', profileImg: authorOne,title:'Başkomiser Emin'},
            {name:'Binnur Kaya', profileImg: authorTwo,title:'Komiser Asuman'},
            {name:'Cengiz Bozkurt', profileImg: authorThree,title:'Komiser Salih'},
            {name:'Feyyaz Yiğit', profileImg: authorFour,title:'Suç Uzmanı Dizdar Koşu'}
        ]
     } 
    render() { 
        return (
            <div className='w-11/12 mx-auto max-w-5xl flex justify-between items-start mt-4 flex-col md:flex-row border'>
                <div className='md:w-[29%] w-[100%]'>
                    <img src={movieImg} className="w-[100%]" alt="" />
                    <Button className='w-full bg-green rounded-b-lg'>
                        <img src={netflixIcon} alt="" style={c2} />
                    </Button>
                    <Button className='w-full bg-red rounded-lg p-3 mt-8' text='Another Suggestion' />
                     
                </div>
                <div className='md:w-[64%] w-[100%] md:mt-0 mt-4'>
                    <h1 className='font-[playfair] text-5xl font-bold '>You've Got Murder</h1>
                    <ul className='mt-4'>
                        {this.state.movieDetails.map(detail => <li className='inline mr-3 bg-grey font-semibold p-2 rounded-[12px] text-[14px]' key={detail}>{detail}</li>)}
                    </ul>
                   <div className='mt-8 flex space-x-2'>
                       <img src={imdbIcon} alt="" />
                       <span className='font-roboto'>
                            <span className='font-semibold text-[24px]'>7.0</span>
                            <span className='font-normal text[16px]'>/10</span>
                        </span> 
                   </div>
                   <div className='mt-4 font-[inter]'>
                        <h4 className='font-bold text-[18px]'>Overview</h4>
                        <p className='text-sm font-normal'>Istanbul Police Department homicide detectives encounter a murder nothing like they’ve seen before.Commissioners Emin, Salih, Asuman and deputy Alaattin begin investigating.But strange murders keep happening. They don’t have any evidence or any clues. Day by day, tempers flare and the police chiefs grow annoyed.As the murders keep piling up, the public’s interest rises. The pressure on Emin and his colleagues get intense. At last, the chief of police assigns “crime expert” Dizdar Koşu, who has recently come back from the US, to the team.Overwhelmed with panic, pressure and disdain, Emin and his friends try to solve the strangest series of murders with the most unusual methods.This fast race against time immediately turns into a tragicomedy.</p>
                   </div>
                   <div className='mt-3'>
                     <div className='flex space-x-[60px] font-[inter]'>
                        {this.state.author.map(authdets => { return (
                                <div className='flex flex-col justify-center items-center' key={authdets}>
                                    <small className='font-bold text-sm'>{authdets.name}</small> 
                                    <p className='text-xs'>{authdets.title}</p> 
                                </div>
                            )})}
                     </div>
                   </div>
                   <hr className='text-[#D9D7C6] mt-6' />

                   <div className='mt-4'>
                        <div className="flex justify-between font-[inter]">
                            {this.state.otherAuthors.map( otherauthor => {
                                return (
                                    <div className='flex flex-col items-center' key={otherauthor}>
                                        <img src={otherauthor.profileImg}  style={{width:'48px'}} alt="" />
                                        <small className='text-sm font-bold'>{otherauthor.name}</small>
                                        <p className='text-sm font-normal'>{otherauthor.title}</p>
                                     </div>
                                )
                            })}
                        </div>
                   </div>
                </div>
            </div>
        );
    }
}
 
export default Movies;


