import styled from 'styled-components';

export const InputContainer = styled.div`
	display: block;
	max-width: 800px;
	margin: 0 auto;

	.input {
		&__selectors {
			display: grid;
			grid-template-columns: repeat(5, 1fr);
			grid-column-gap: 10px;
			grid-row-gap: 10px;
		}
		
		&__btn {
			padding: 10px 18px;
			color: white;
			font-size: 18px;
			position: relative;
			overflow: hidden;
      z-index: 1;
      
      &.is--active {
        pointer-events: none;
        &:after {
          transform: translateX(0);
        }
      }

			&:before {
				content: '';
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				background-color: #499c80;
				z-index: -1;
			}

			&:after {
				content: '';
				position: absolute;
				top: 0;
				right: -50px;
				bottom: 0;
				left: 0;
				border-right: 50px solid transparent;
				border-bottom: 80px solid #2e6854;
				transform: translateX(-100%);
				transition: .35s all ease-in-out;
				z-index: -1;
			}

			&:hover {
				&:after {
					transform: translateX(0);
				}
			}

			&.is--random {
				background-color: #2d7283;
			}
		}

		&__info {
			margin-top: 40px;
    }
    
    &__message {
      color: white;
      font-size: 20px;
    }

    &__players {
      display: flex;
      margin-top: 20px;
    }

    &__player-label {
      color: white;
      transition: .1s color ease-in-out;
      display: flex;
      position: relative;

      &:not(:first-child) {
        margin-left: 6px;
      }

      &:hover {
        p, i {
          color: red;
        }
      }

      p {
        margin-right: 2px;
      }

      i {
        position: relative;
        top: -4px;
        right: 0;
        font-size: 10px;
      }
    }
	}
`;