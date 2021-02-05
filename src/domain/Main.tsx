import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchGetCatsFn } from '../actions/ActionsGetCats';
import { fetchGetVotesFn } from '../actions/ActionsGetVotes';
import { fetchFavFn } from '../actions/Fav/ActionsFav';
import { deleteFav, postFav } from '../actions/Fav/ActionsFavPostDel';
import { postVotesUp, postVotesDown } from '../actions/ActionsVoteUpDown';
import ReactLoading from 'react-loading';

interface Display {
  dispatch: any;
  cats: Cats;
  votes: Votes;
  favs: {
    fetchFavs: any;
  };
}
interface Votes {
  fetchvotes: any;
}
interface Cats {
  fetchcats: any;
  length: number;
}
interface IMain {}

type Props = Display;

function Main(props: Props) {
  const [mount, setMount] = useState(false);
  setTimeout(() => {
    if (!mount) {
      setMount(true);
    }
  }, 1600);

  useEffect(() => {
    props.dispatch(fetchGetCatsFn());
    props.dispatch(fetchGetVotesFn());
    props.dispatch(fetchFavFn());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const favoriteFn = (imageId: string, isInFav: any) => {
    if (isInFav) {
      props.dispatch(deleteFav(isInFav));
    } else {
      props.dispatch(postFav(imageId));
    }
  };
  const voteUp = (imageId: any) => {
    props.dispatch(postVotesUp(imageId));
  };

  const voteDown = (imageId: any) => {
    props.dispatch(postVotesDown(imageId));
  };
  const getAddedVotes = () => {
    if (props.votes.fetchvotes) {
      let getAddedVotesVar = props.votes.fetchvotes.find(
        (favId: any) => favId.sub_id === 'votes'
      );

      return getAddedVotesVar;
    }
  };
  console.log(process.env);
  return (
    <>
      <div className=' '>
        <div className=''>
          <div className='flex  justify-center text-lg my-5'>
            <Link
              className='bg-black w-48 text-center text-white '
              to='/Upload'
            >
              Upload Cat Image
            </Link>
            <div className='ml-2'>Cats</div>
          </div>
          <div className='flex justify-center'>
            <div className='flex flex-wrap  lg:grid lg:grid-cols-4 w-11/12 '>
              {mount ? (
                props.cats.fetchcats.map((cat: any, index: any) => {
                  let getImgValues = props.favs?.fetchFavs.find(
                    (favId: any) =>
                      favId.sub_id === 'Fav' && favId.image_id === cat.id
                  );

                  return (
                    <React.Fragment key={index}>
                      <div className='flex flex-col ml-4 lg:ml-1'>
                        <div className=''>
                          <img src={cat.url} alt='' className='h-60 w-80' />
                        </div>
                        <div className='my-3    '>
                          <i
                            className={`${
                              getImgValues ? 'fas fa-heart ' : 'far fa-heart '
                            }   text-4xl  heart-icons`}
                            onClick={() => {
                              favoriteFn(cat.id, getImgValues);
                            }}
                          ></i>
                          <i
                            onClick={() => {
                              voteUp(cat.id);
                            }}
                            className='far fa-arrow-alt-circle-up text-4xl ml-3'
                          ></i>
                          <i
                            onClick={() => {
                              voteDown(cat.id);
                            }}
                            className='far fa-arrow-alt-circle-down text-4xl  ml-3'
                          ></i>
                          <div className='text-xl'>
                            Number of Votes <div className=''> </div>
                          </div>
                        </div>
                      </div>
                    </React.Fragment>
                  );
                })
              ) : (
                <div className='flex   justify-center '>
                  <ReactLoading type={'spinningBubbles'} color='black' />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state: any) => ({
  cats: state.cats,
  votes: state.votes,
  error: state.error,
  favs: state.fav,
});

export default connect(mapStateToProps)(Main);
